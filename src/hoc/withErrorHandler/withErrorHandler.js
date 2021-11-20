import React, { Component, Fragment } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function withErrorHandler(WrappedComponent, axios) {
  return class extends Component {
    state = {
      error: false,
      errorMessage: "",
    };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (config) => {
          this.setState({ error: false });
          return config;
        },
        (error) => {
          this.setState({ error: true, errorMessage: error });
        }
      );

      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => this.setState({ error: true, errorMessage: error })
      );
    }

    componentWillUnmount() {
      console.log("Will Unmount", this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    handleClose = () => {
      this.setState({
        error: false,
      });
    };

    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.error ? (
                <Fragment>
                  <p className="text-danger h5">
                    {this.state.errorMessage.message}
                  </p>
                  <p>Please Check your internet Connection</p>
                </Fragment>
              ) : null}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
}

export default withErrorHandler;

import React, { Component } from 'react';
import TextField from '@material-ui/TextField';


export default class InputFields extends Component
{
    render() {
        return (
          <div>
            <Snackbar open={this.state.openSuccess} autoHideDuration={6000} onClose={() => this.closeAlertWindow("success")}>
              <Alert onClose={() => this.closeAlertWindow("success")} severity="success">
                {this.state.message}
              </Alert>
            </Snackbar>
            <Snackbar open={this.state.openError} autoHideDuration={6000} onClose={() => this.closeAlertWindow("error")}>
              <Alert onClose={() => this.closeAlertWindow("error")} severity="error">
                {this.state.message}
              </Alert>
            </Snackbar>
            <Snackbar open={this.state.openWarning} autoHideDuration={6000} onClose={() => this.closeAlertWindow("warning")}>
              <Alert onClose={() => this.closeAlertWindow("warning")} severity="warning">
               {this.state.message}
              </Alert>
            </Snackbar>
            <Snackbar open={this.state.openInfo} autoHideDuration={6000} onClose={() => this.closeAlertWindow("info")}>
              <Alert onClose={() => this.closeAlertWindow("info")} severity="info">
                {this.state.message}
              </Alert>
            </Snackbar>
          </div>
        );
    }
}
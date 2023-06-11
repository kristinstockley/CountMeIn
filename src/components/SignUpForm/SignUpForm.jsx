import { Component } from 'react';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      error: ''
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Invalid Sign Up- Please Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>

        <div className="SignUpForm">
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <div className="form-input">

                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="name"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-input">

                <label htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-input">

                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="form-input">

                <label htmlFor="confirm">Confirm</label>
                <input
                  className="form-control"
                  type="password"
                  name="confirm"
                  id="confirm"
                  value={this.state.confirm}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-outline" disabled={disable}>
                SIGN UP
              </button>
            </form>
            <p className="error-message">&nbsp;{this.state.error}</p>

          </div>
        </div>
      </>
    );
  }
}

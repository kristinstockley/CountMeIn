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
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: 'Invalid Entry - Please Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (

      <div>
        <div className="form-container">
          <form autoComplete="on" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="username"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="new-password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label htmlFor="confirm">Confirm</label>
            <input
              type="password"
              name="confirm"
              id="confirm"
              autoComplete="new-password"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" className="btn btn-primary" disabled={disable}>
              SIGN UP
            </button>
          </form>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      </div>
    );
  }
}

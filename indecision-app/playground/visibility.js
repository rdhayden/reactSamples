class VisbilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: true,
    };
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        showText: !prevState.showText,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.showText ? 'Hide details' : 'Show details'}
        </button>
        {this.state.showText && <p>'Some text'</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisbilityToggle />, document.getElementById('app'));

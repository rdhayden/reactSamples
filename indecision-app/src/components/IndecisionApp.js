import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
    // equivalent to:
    // this.setState(() => {
    //  return {
    //    options: [],
    //  }
    // });
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
    }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[randomNum],
    }));
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    //concat creates a new array so we're not messing with state external to the function
    this.setState((prevState) => ({
      options: prevState.options.concat([option]),
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    }));
  };

  // A react life cycle method that fires when a component is first mounted to the DOM
  // Lifecycle methods are methods so can not be used in React Stateless Classes
  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // If there's an error, don't update options, so do nothing here
    }
  }

  //Another react life cycle method that fires when a component update occurs
  // prevProps and prevState are optional
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  // Another react life cycle method that fires when a component unmounts, e.g. when navigating away from pages
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  // See more lifecycle methods at https://reactjs.org/docs/react-component.html

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;

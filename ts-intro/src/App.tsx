import * as MyTypes from "MyTypes";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { todoActions } from "./actions";
import { PersonDisplay } from "./components/";

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    count: store.todo.count,
    list: store.todo.list
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => {
  return bindActionCreators(todoActions, dispatch);
};

interface IAppModel {
  count: number;
  list: string[];
}

type AppProps = IAppModel & typeof todoActions;

interface IAppState {
  readonly newToDo: string;
}

class App extends React.Component<AppProps, IAppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      newToDo: ""
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  private handleTextChange = e => {
    this.setState({
      newToDo: e.target.value
    });
  };

  public render() {
    return (
      <div className="App">
        <PersonDisplay name={"sterling"} age={27} isMinor={false} height={80} />
        {this.props.list}
        <input value={this.state.newToDo} onChange={e => this.handleTextChange(e)} />
        <button onClick={() => this.props.add(this.state.newToDo)}>Add To Do</button>
      </div>
    );
  }
}

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(App);

import { FlexPlugin } from "flex-plugin";
import React from "react";
import Validator from "./components/Validator/Validator.js";
import configureStore from "./store/store";

const PLUGIN_NAME = "ThunkSamplePlugin";

export default class ThunkSamplePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  init(flex, manager) {
    const store = configureStore();

    flex.TaskInfoPanel.Content.add(<Validator store={store} key="validator" />);
  }
}

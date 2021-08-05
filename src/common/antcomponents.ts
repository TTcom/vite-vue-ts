import {
  Button,
  Card,
  message,
  Breadcrumb,
  List,
  Avatar,
} from "ant-design-vue";
import { DefineComponent } from "vue";
const plugins = [Button, Card, Breadcrumb, List, Avatar];

export const setupAntd = (app: DefineComponent): void => {
  app.config.globalProperties.$message = message;
  plugins.forEach((plugin) => {
    app.use(plugin);
  });
};

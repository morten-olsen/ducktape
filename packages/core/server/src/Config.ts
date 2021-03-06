import Client from './Client';
import ConfigStore from './ConfigStore';

interface Config<T extends {[name: string]: Client}> {
  port: number;
  url: string;
  clients: T;
  configStore: ConfigStore;
}

export default Config;
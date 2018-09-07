import { datasetSpecProvider } from './server/dataset_provider';

export default function (kibana) {

  return new kibana.Plugin({
    require: ['kibana'],
    uiExports: {},
    init: (server) => {
      server.registerSampleDataset(datasetSpecProvider);
    }
  });

};

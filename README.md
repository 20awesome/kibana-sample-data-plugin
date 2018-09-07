Kibana 6.4 added sample data sets as a one click way to populate elasticsearch with data and set up Kibana with Searches, Visualizatoins, and Dashboards.

This plugin is just a demo showing how you could add your own custom sample data sets.

Sample data sets are registered by calling `registerSampleDataset` on the server object passed to your `init` function. The data set provider is just a function that returns an object conforming to the [data set schema](https://github.com/elastic/kibana/blob/6.4/src/server/sample_data/data_set_schema.js).

```
  return new kibana.Plugin({
    require: ['kibana'],
    uiExports: {},
    init: (server) => {
      server.registerSampleDataset(datasetSpecProvider);
    }
  });
```

**note:** This is not an offically supported plugin and this plugin will not be maintained or kept up to date with future Kibana changes. This plugin only exists as a tech demonstration.

<img width="2048" alt="screen shot 2018-09-07 at 7 35 16 am" src="https://user-images.githubusercontent.com/373691/45222525-0da91200-b272-11e8-98e4-f5ee6eb5039a.png">

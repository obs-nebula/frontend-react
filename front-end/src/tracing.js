/*
 * Copyright Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ConsoleSpanExporter, BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { WebTracerProvider } = require('@opentelemetry/sdk-trace-web');
const { OTLPTraceExporter }  = require('@opentelemetry/exporter-trace-otlp-http');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { FetchInstrumentation } = require('@opentelemetry/instrumentation-fetch');

const consoleExporter = new ConsoleSpanExporter();

const collectorExporter = new OTLPTraceExporter({
  headers: {}
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: process.env.REACT_APP_NAME
  })
});

const fetchInstrumentation = new FetchInstrumentation({});

fetchInstrumentation.setTracerProvider(provider);
provider.addSpanProcessor(new BatchSpanProcessor(consoleExporter));
provider.addSpanProcessor(new BatchSpanProcessor(collectorExporter, {
  // The maximum queue size. After the size is reached spans are dropped.
  maxQueueSize: 15,
  // The maximum batch size of every export. It must be smaller or equal to maxQueueSize.
  maxExportBatchSize: 10,
  // The interval between two consecutive exports
  scheduledDelayMillis: 500,
  // How long the export can run before it is cancelled
  exportTimeoutMillis: 5000,
}));

provider.register();

registerInstrumentations({
  instrumentations: [
    fetchInstrumentation
  ],
  tracerProvider: provider
});

export default function TraceProvider ({ children }) {
  return (
    <>
      {children}
    </>
  );
}
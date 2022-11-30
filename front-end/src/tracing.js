const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { WebTracerProvider, BatchSpanProcessor } = require('@opentelemetry/sdk-trace-web');
const { trace } = require('@opentelemetry/api');
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
//import { CollectorTraceExporter } from '@opentelemetry/exporter-collector';
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';
const exporter = new ConsoleSpanExporter();
const exporter2 = new OTLPTraceExporter({
  endpoint: 'http://localhost:55678/v1/traces'
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'koffeeshop-service'
  })
});
const fetchInstrumentation = new FetchInstrumentation({});

fetchInstrumentation.setTracerProvider(provider);
provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
provider.addSpanProcessor(new BatchSpanProcessor(exporter2));
provider.register();

registerInstrumentations({
  instrumentations: [
    fetchInstrumentation
  ],
  tracerProvider: provider
});

trace.getTracer('koffeeshop-service');
export default function TraceProvider ({ children }) {
  return (
    <>
      {children}
    </>
  );
}
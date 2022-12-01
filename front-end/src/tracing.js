const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { WebTracerProvider } = require('@opentelemetry/sdk-trace-web');
const { trace } = require('@opentelemetry/api');
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

import { FetchInstrumentation } from '@opentelemetry/instrumentation-fetch';

const consoleExporter = new ConsoleSpanExporter();

// This is using the default localhost:4381
const collectorExporter = new OTLPTraceExporter({
  headers: {}
});

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'front-end'
  })
});

const fetchInstrumentation = new FetchInstrumentation({});

fetchInstrumentation.setTracerProvider(provider);
provider.addSpanProcessor(new SimpleSpanProcessor(consoleExporter));
provider.addSpanProcessor(new SimpleSpanProcessor(collectorExporter));
provider.register();

registerInstrumentations({
  instrumentations: [
    fetchInstrumentation
  ],
  tracerProvider: provider
});

trace.getTracer('front-end');

export default function TraceProvider ({ children }) {
  return (
    <>
      {children}
    </>
  );
}
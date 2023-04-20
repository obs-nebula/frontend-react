# frontend-react

| Package | |
| ----------- | ----------- |
| @opentelemetry/exporter-trace-otlp-http | To export to OTEL collector via OTLP/HTTP |
| @opentelemetry/resources | To be used with `semantic-conventions` to identify the application/service's name |
| @opentelemetry/sdk-trace-web | For automatic instrumentation |
| @opentelemetry/semantic-conventions | To be used with `resources` to identify the application/service's name |
| @opentelemetry/instrumentation | To register the fetch auto-instrumentation plugin |
| @opentelemetry/instrumentation-fetch | For fetch auto-instrumentation |

## How to run

Open a new terminal and run:

```console
docker-compose up --build
```
Check the result in Browser Console:

Check the result in Jaeger UI (http://localhost:16686/)

Check the result in the otelcol logs:

```console
ScopeSpans #0
ScopeSpans SchemaURL:
InstrumentationScope @opentelemetry/instrumentation-fetch 0.34.0
Span #0
    Trace ID       : a7425b68455b0b3f685ea07f9ab3cedd
    Parent ID      :
    ID             : b68d02da6dd97213
    Name           : HTTP GET
    Kind           : Client
    Start time     : 2022-12-01 14:45:41.7633 +0000 UTC
    End time       : 2022-12-01 14:45:41.7713 +0000 UTC
    Status code    : Unset
    Status message :
Attributes:
     -> component: Str(fetch)
     -> http.method: Str(GET)
     -> http.url: Str(http://localhost:5000/express_backend)
     -> http.status_code: Int(200)
     -> http.status_text: Str(OK)
     -> http.host: Str(localhost:5000)
     -> http.scheme: Str(http)
     -> http.user_agent: Str(Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36)
     -> http.response_content_length: Int(0)
Events:
SpanEvent #0
     -> Name: fetchStart
     -> Timestamp: 2022-12-01 14:45:41.7639 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #1
     -> Name: domainLookupStart
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #2
     -> Name: domainLookupEnd
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #3
     -> Name: connectStart
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #4
     -> Name: secureConnectionStart
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #5
     -> Name: connectEnd
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #6
     -> Name: requestStart
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #7
     -> Name: responseStart
     -> Timestamp: 2022-12-01 14:45:37.8655 +0000 UTC
     -> DroppedAttributesCount: 0
SpanEvent #8
     -> Name: responseEnd
     -> Timestamp: 2022-12-01 14:45:41.7691 +0000 UTC
     -> DroppedAttributesCount: 0
	{"kind": "exporter", "data_type": "traces", "name": "logging"}
```

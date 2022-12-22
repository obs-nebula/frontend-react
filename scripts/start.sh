if [ ! -f "otelcol_0.68.0_linux_amd64.tar.gz" ]
then 
  wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.68.0/otelcol_0.68.0_linux_amd64.tar.gz
fi

tar xf otelcol_0.68.0_linux_amd64.tar.gz
./otelcol --config=file:otel-collector-config-test.yaml > out.log 2>&1 &
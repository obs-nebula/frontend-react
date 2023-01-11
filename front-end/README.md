# front-end

## Deploy to OpenShift Local

Start OpenShift Local:
```console
crc start
eval (crc oc-env)
```

Login and create a project called `example`:
```console
oc login -u developer https://api.crc.testing:6443
oc new-project example 
```

Install the Jaeger and OTELCOL operators (the `yaml` files are inside the front-end directory):

```
oc policy add-role-to-user admin developer -n example
oc apply -f jaeger.yaml
oc apply -f collector.yaml
```

Create new app:
```console
oc new-app registry.access.redhat.com/ubi8/nodejs-18~https://github.com/obs-nebula/frontend-react#deploy --name=front-end --context-dir=front-end/
```

To follow the build/push:
```console
oc logs -f buildconfig/front-end
```

Expose the app:
```console
oc expose service/front-end
```

Check the result: [http://front-end-example.apps-crc.testing/](http://front-end-example.apps-crc.testing/)

## Cleanup

```console
oc delete all --selector app=front-end
```

Or delete the project

```console
oc delete project example
```
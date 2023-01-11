# express-server

## Deploy to OpenShift Local

Start OpenShift Local:
```console
crc start
eval (crc oc-env)
```

Login and create a project called `example`:
```console
oc login -u developer https://api.crc.testing:6443
oc new example 
```

Create new app:
```console
oc new-app registry.access.redhat.com/ubi8/nodejs-18~https://github.com/obs-nebula/frontend-react#deploy --name=express-server --context-dir=express-server/
```

To follow the build/push:
```console
oc logs -f buildconfig/express-server
```

Expose the app:
```console
oc expose service/express-server
```

Check the result:
```console
curl http://express-server-example.apps-crc.testing/express_backend
{"express":"Welcome to the project"}
```

## Cleanup

```console
oc delete all --selector app=express-server
```

Or delete the project

```console
oc delete project example
```
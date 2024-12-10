## starting json server

```
json-server --port 4500 api.json
```

### Pipes

Pipes are used in template particularly in interpolation

pipe has various parts 
  1. Name
  2. Target
  3. Parameters (optional)

```
  {{price| currency:'USD'}}

  currency -name
  price -target
  'USD':parameters'

  ```

  application of pipe on a target either formats the target if it is scalar
  and filters if it is array

  in angular there are no inbuilt pipes to apply on arrays


for array filter we can custom pipes
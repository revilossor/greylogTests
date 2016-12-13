## playing round with greylog
-----

to start greylog in docker :

```docker-compose up```

then go to 127.0.0.1:9000.

### adding inputs

In the system/inputs menu, add a GELF HTTP input on port 12201 - this port is already mapped to the docker container. If you want inputs on other ports, you'll have to add the mapping to the docker-compose yaml file.

Once this port is mapped, you can curl a message in with this command :

```curl -XPOST http://127.0.0.1:12201/gelf -p0 -d '{"short_message":"Hello there", "host":"example.org", "facility":"test", "_foo":"bar"}'```

if there are issues with the port mapping, try this

```docker exec -d [graylog container id] curl -XPOST http://127.0.0.1:12201/gelf -p0 -d '{"short_message":"Hello there", "host":"example.org", "facility":"test", "_foo":"bar"}'```



### GELF structure

Gelf should look like this :

```
{
  "version": "1.1",
  "host": "example.org",
  "short_message": "A short message that helps you identify what is going on",
  "full_message": "Backtrace here\n\nmore stuff",
  "timestamp": 1385053862.3072,
  "level": 1,
  "_user_id": 9001,
  "_some_info": "foo",
  "_some_env_var": "bar"
}
```
[see here for more info](http://docs.graylog.org/en/2.1/pages/gelf.html)

## playing round with greylog
-----

to start greylog in docker :

```docker-compose up```

then go to 127.0.0.1:9000.

### adding inputs

In the system/inputs menu, add a GELF HTTP input on port 12201 - this port is already mapped to the docker container. If you want inputs on other ports, you'll have to add the mapping to the docker-compose yaml file.

Once this port is mapped, you can curl a message in with this command :

```curl -XPOST http://127.0.0.1:12201/gelf -p0 -d '{"short_message":"Hello there", "host":"example.org", "facility":"test", "_foo":"bar"}'```

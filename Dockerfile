FROM graylog2/server:2.1.0-3
RUN cd /usr/share/graylog/plugin && wget https://github.com/Graylog2/graylog-plugin-slack/releases/download/2.4.0/graylog-plugin-slack-2.4.0.jar

source venv_t/bin/activate

export DBHOST="localhost"
export DBUSER="turtle_master_db_admin"
export DBNAME="turtle_master_db"
export DBPASS="covidhub@io"

echo Please make sure the database $DBNAME has been created on $DBHOST
echo and db user $DBUSER has been set with pwd = $DBPASS
echo Please run the following SQL to do so:
echo sudo -u postgres psql
echo CREATE DATABASE $DBNAME \;
echo CREATE ROLE $DBUSER WITH ENCRYPTED PASSWORD \'$DBPASS\'\;
echo ALTER ROLE $DBUSER WITH LOGIN SUPERUSER INHERIT CREATEDB CREATEROLE REPLICATION\;
echo GRANT ALL PRIVILEGES ON DATABASE $DBNAME TO  $DBUSER\;
echo ALTER ROLE $DBUSER SET client_encoding TO 'utf8'\;
echo ALTER ROLE $DBUSER SET default_transaction_isolation TO 'read committed'\;
echo ALTER ROLE $DBUSER SET timezone TO 'UTC'\;

pushd frontend
npm install
npm run build
popd

pushd Doggy
python manage.py collectstatic
popd

sudo rm /etc/nginx/sites-enabled/django_nginx_doggy.conf
sudo rm /etc/nginx/sites-available/django_nginx_doggy.conf
sudo ln -s $PWD/django_nginx.conf /etc/nginx/sites-available/django_nginx_doggy.conf
sudo ln -s $PWD/django_nginx.conf /etc/nginx/sites-enabled/django_nginx_doggy.conf
#sudo rm /etc/uwsgi/apps-enabled/django_uwsgi.ini
#sudo ln -s $PWD/django_uwsgi.ini /etc/uwsgi/apps-enabled/
sudo rm /etc/systemd/system/gunicorn_Doggy.socket
sudo ln -s $PWD/gunicorn_Doggy.socket /etc/systemd/system/
sudo rm /etc/systemd/system/gunicorn_Doggy.service
sudo ln -s $PWD/gunicorn_Doggy.service /etc/systemd/system/
#sudo service uwsgi restart
sudo systemctl daemon-reload
sudo systemctl restart gunicorn_Doggy.socket
sudo systemctl enable gunicorn_Doggy.socket
sudo systemctl restart gunicorn_Doggy.service
sudo systemctl enable gunicorn_Doggy.service
sudo systemctl status gunicorn_Doggy.socket
sudo systemctl status gunicorn_Doggy.service
#sudo rm /etc/supervisor/conf.d/TurtleMaster.conf
#sudo ln -s $PWD/supervisor.conf /etc/supervisor/conf.d/TurtleMaster.conf
#sudo supervisorctl reread
#sudo supervisorctl update
sudo service nginx restart

echo ... done

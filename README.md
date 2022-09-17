A GraphQL-based Spring Backend Application Bundled with its Angular Client
This Application Proxies the Publicly Available Star Wars API

Follow these steps to bootstrap the application
1. Download and extract the Zip archive
2. From the projects root directory i.e. ~user-home/star-wars in my case (Kontrol\star-wars)
   run the following command without the double quotes "npm run build"
3. Next you run "npm install"
4. Next you run "mvn package"
5. Lastly you run "java -jar target/star-wars.jar"
You should be able to access the bundled application at http://localhost:8080

Note: Ensure you have at least Java SE 10 installed and configured correctly
and the latest release of Node.js
# Soffitjs
## A quick and dirty POC returning html from node given a remote portlet request.

## Steps to integrate to portal

1. Deploy the soffit portal code update
  a. Build and install [soffit](https://github.com/drewwills/Soffit) to your local m2 cache
  b. Cherry-pick/merge/whatever [Drew Wills' soffit branch](https://github.com/drewwills/uportal/tree/add-soffit)
  c. Build/deploy portal wherever you'd like to test
2. Manage Portlets
3. Register New Portlet
4. Portlet (Adapter for JSR-168 and JSR-286 Portlets)
5. /uPortal > Soffit Connector
6. Add portlet preference org.apereo.portlet.soffit.connector.SoffitConnectorController.serviceUrl : \<node_url_and_port\>
  - This will *probably* be fine as http://localhost:3000/ unless you're running the portal and this code on different machines
7. Publish as usual
8. Navigate to /uPortal/p/\<your_portlet_fname\>
9. ?
10. PROFIT!

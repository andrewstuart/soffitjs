# Soffitjs
## A quick and dirty POC returning html from node given a remote portlet request.

## Steps to integrate to portal

1. Deploy the soffit portal code update
  1. Build and install [soffit](/drewwills/Soffit) to your local m2 cache
  2. Cherry-pick/merge/whatever [Drew Wills' soffit branch](/drewwills/uportal/tree/add-soffit)
    - Also can be seen at [this PR](/jasig/uPortal/pull/665)
  3. Build/deploy portal wherever you'd like to test
2. Manage Portlets

### Import

(cont.)

3. Modify data in the included xml definition file (`soffit-test-one.portlet-definition.xml`)
4. Import using the Admin import/export feature (or your preferred import method)

### Manual

(cont.)

3. Register New Portlet
4. Portlet (Adapter for JSR-168 and JSR-286 Portlets)
5. /uPortal > Soffit Connector
6. Add portlet preference org.apereo.portlet.soffit.connector.SoffitConnectorController.serviceUrl : \<node_url_and_port\>
  - This will *probably* be fine as http://localhost:3000/ unless you're running the portal and this code on different machines
7. Publish as usual
8. Navigate to `/uPortal/p/<your_portlet_fname>`
9. ?
10. PROFIT!

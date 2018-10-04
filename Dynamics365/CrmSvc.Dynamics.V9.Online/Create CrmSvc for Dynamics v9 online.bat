@ECHO OFF
REM COMMENT start
REM REGION---------------set the variable in this region---------------------------------
REM COMMENT stop


SET CRM_ONLINE_ORGNIZATION_SERVICE_URL=https://cryp0.api.crm.dynamics.com/XRMServices/2011/Organization.svc
SET CRM_ONLINE_USERNAME=tetofabo@cryp.email
SET CRM_ONLINE_PASSWORD=Admin@123


REM COMMENT start
REM REGION---------------region end------------------------------------------------------
REM COMMENT stop



%cd%\Assets\CrmSvcUtil.exe /url:%CRM_ONLINE_ORGNIZATION_SERVICE_URL% /out:%cd%\Xrm.cs /username:%CRM_ONLINE_USERNAME% /password:%CRM_ONLINE_PASSWORD% /namespace:Dynamics /serviceContextName:XrmServiceContext

pause
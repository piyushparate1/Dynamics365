/// <reference path="../../CrmUtilityBank/WebResources/Script (JScript)/piy_common/piy_SDK.MetaData.js" />
/// <reference path="../../CrmUtilityBank/WebResources/Script (JScript)/piy_common/piy_SDK.REST.js" />

(function ()
{
    SDK.Metadata.RetrieveAllEntities(SDK.Metadata.EntityFilters.Entity,
     false,
     function (entityMetadataCollection)
     {
         var length = entityMetadataCollection.length;
         for (var i = 0; i < length; i++)
         //for (var i = 0; i < 5; i++)
         {
             var entity = entityMetadataCollection[i];
             console.log(entity.SchemaName + " AND " + entity.LogicalName + " AND " + entity.PrimaryIdAttribute, entity);

             (function (entityName, primaryId)
             {
                 console.log(entityName, primaryId);
                 ns.temp(entityName, primaryId);
             })(entity.SchemaName, entity.PrimaryIdAttribute)
         }
     },
     function ()
     {
         console.log("Error while Retriving Entity Metadata.");
     });

    var ns = {
        temp: function (entityName, primaryId)
        {
            var tempArray = [];

            SDK.REST.retrieveMultipleRecords(entityName, primaryId,
                                                   function (obj)//OnSucess
                                                   {
                                                       console.log("Length of data on sucess for " + entityName + " = " + obj.length)

                                                       var length = obj.length;
                                                       for (var i = 0; i < length; i++)
                                                       {
                                                           tempArray.push(obj[i]);
                                                       }
                                                   },
                                                   function ()//OnError
                                                   {
                                                       console.log("************************************* " + entityName + " Error while retrieveMultipleRecords.");
                                                   },
                                                   function ()//OnComplete
                                                   {
                                                       console.log(entityName);
                                                       if (tempArray.length < 50)
                                                           console.table(tempArray);
                                                       else
                                                           console.log(tempArray);
                                                       console.log("************************************* " + entityName + " Completed.");
                                                   });
        }
    };
})()
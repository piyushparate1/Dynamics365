CTG = window.CTG || { __namespace: true };
CTG.Logger = CTG.Logger || { __namespace: true };

CTG.Constants = CTG.Constants || { __namespace: true };

CTG.DynamicsForm = CTG.DynamicsForm || { __namespace: true };
CTG.Helper = CTG.Helper || { __namespace: true };



(function ()
{
    this.PublicFunction = function () { };

    this.PublicEnum = function () { throw new Error("Constructor not implemented this is a static enum."); };

    var _PrivateVariable = [];

    function _PrivateFunction() { };

}).call(CTG.Helper);


(function ()
{
    this.Log = function (objectToLog)
    {
        console.log(objectToLog);
        //alert(objectToLog);
    };
}).call(CTG.Logger);


(function ()
{
    this.Entity = {
        LogicalName: "Piyush",
    };

}).call(CTG.Constants);


(function ()
{
    this.OnLoad = function ()
    {
        CTG.Logger.Log("Piyush");
    };
}).call(CTG.DynamicsForm);




//CTG.Metadata.EntityFilters: this enum is written this way to enable Visual Studio IntelliSense
CTG.Metadata.PublicEnum.prototype = {
    Default: 1,
    Entity: 1,
    Attributes: 2,
    Privileges: 4,
    Relationships: 8,
    All: 15
};

CTG.Metadata.PublicEnum.Default = 1;
CTG.Metadata.PublicEnum.Entity = 1;
CTG.Metadata.PublicEnum.Attributes = 2;
CTG.Metadata.PublicEnum.Privileges = 4;
CTG.Metadata.PublicEnum.Relationships = 8;
CTG.Metadata.PublicEnum.All = 15;
CTG.Metadata.PublicEnum.__enum = true;
CTG.Metadata.PublicEnum.__flags = true;

document.onload = CTG.DynamicsForm.OnLoad;
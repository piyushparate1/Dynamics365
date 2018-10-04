Example = window.Example || {};
Example.StaticClassPattern = Example.StaticClassPattern || {};
(function ()
{
    this.fun = function (abc)
    {
        alert("i m public");
        _fun(abc);
    };

    function _fun(a)
    {
        alert("i m private" + a);
    };
}).call(Example.StaticClassPattern);

Example = window.Example || {};
Example.classPattern = Example.classPattern || {};
Example.classPattern = (function (obj)
{
    this.fun = function ()
    {
        alert("i m public");
        _fun(obj)
    };

    function _fun(obj)
    {
        alert("i m private" + obj);
    };
});
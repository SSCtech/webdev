define(function ()
{
  var vm =
    {
      MktsAndFacs: ko.observableArray(
        [
          { Market: "CHI", Facilities: ko.observableArray(["820", "840", "860"]) },
          { Market: "PHX", Facilities: ko.observableArray(["943", "965", "987"]) },
          { Market: "SAN", Facilities: ko.observableArray(["MW-C", "XY-Z", "AB-C"]) }
        ]),
      selectedMarket: ko.observable(),
      selectedFacility: ko.observable()
    };

  return vm;
});


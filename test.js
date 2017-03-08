
    // Constructor for an object with two properties
    var Country = function(name, population) {
        this.countryName = name;
        this.countryPopulation = population;

    };

    var viewModel = {
        availableCountries : ko.observableArray([
            new Country("UK", 65000000),
            new Country("USA", 320000000),
            new Country("Sweden", 29000000)
        ]),
        selectedCountry : ko.observable() // Nothing selected by default
    };


    var vm = viewModel;
    ko.applyBindings(vm);
    console.log('connected');
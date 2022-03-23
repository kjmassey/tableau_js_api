var viz;
var knownSize = false;
let vizParams = {};

var elems = {
    foodDrinksDogs:
        'https://10ax.online.tableau.com/t/kjmdev797388/views/FoodDrinksDoggosinOhio/FoodDrinksDogsinOhio?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=yes&:toolbar=no',
    ohioCrime:
        'https://10ax.online.tableau.com/t/kjmdev797388/views/OhioCrimebyCounty/OhioCrimebyCounty?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=yes&:toolbar=no',
    videoGames:
        'https://10ax.online.tableau.com/t/kjmdev797388/views/LetsPlayAGame/LetsPlayAGame?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:embed=yes&:toolbar=no'
};

var activeId;

function getElemId(id) {
    if (activeId !== id) {
        activeId = id;
        knownSize = false;

        if (viz) {
            viz.dispose();
        }

        let loadCount = 0;

        let vizDiv = $('#vizDiv');

        let url = elems[id];
        let options = {
            hideTabs: true,
            onFirstVizSizeKnown: async () => {
                knownSize = true;
            }
        };

        viz = new tableau.Viz(vizDiv, url, options);

        if (loadCount < 1) {
            $('iframe').first().detach().appendTo('#vizDiv');
            $('#vizDiv iframe').first().attr('id', 'vizFrame');

            loadCount += 1;
        }

        if (!knownSize) {
            $('#vizFrame').css('min-height', '700px');
            $('#vizFrame').css('max-width', '100%');
        }
    }
}

async function getParamValues() {
    let paramObjs = viz.getWorkbook().getParametersAsync();

    await paramObjs.then(function (paramObjs) {
        for (var i = 0; i < paramObjs.length; i++) {
            try {
                var name = paramObjs[i].getName();
                var value = paramObjs[i].getCurrentValue();

                vizParams[name] = value.value;
            } catch (e) {
                console.log('-- error: ', e);
            }
        }
    });
}

async function toggleParamValue(param) {
    await getParamValues();
    let val = '0';

    mainWorkbook = viz.getWorkbook();
    console.log('--- current val: ', vizParams[param]);

    if (vizParams[param] == 0) {
        val = '1';
    }

    console.log('new val: ', val);
    mainWorkbook.changeParameterValueAsync(param, val);
}

function changeParameterText(param, val) {
    mainWorkbook = viz.getWorkbook();
    mainWorkbook.changeParameterValueAsync(param, val);
}

function setActive(id) {
    $('.wb-select').each((index, el) => {
        if (el.id !== id) {
            $(el).removeClass('active');
            $(el).removeClass('sidebar-dropdown-open');
        }
    });

    $('.sidebar-dropdown').each((index, el) => {
        $(el).removeClass('active');
    });

    $(`#${id}`).addClass('active');

    if ($(`#${id}`).hasClass('sidebar-dropdown')) {
        $(`#${id}`).toggleClass('sidebar-dropdown-open');
    }
}

function changeDashboardFilter(filter, val) {
    mainDash = viz.getWorkbook().getActiveSheet();

    mainDash.applyFilterAsync(filter, val, tableau.FilterUpdateType.REPLACE);
}

function toggleParamDivs(id) {
    switch (id) {
        case 'foodDrinksDogs':
            $('#mapParams').toggle();
            $('#crimeParams').hide();

            break;

        case 'ohioCrime':
            $('#crimeParams').toggle();
            $('#mapParams').hide();

            break;
    }
}

function toggleMapParams() {
    $('#mapParams').toggle();
}

function toggleCrimeParams() {
    $('#crimeParams').toggle();
}


var server = 'https://www.indicadores.pr/resource/'; // + '5pce-675z.json';


var datasets = [
    {
        'nDataSet': '0',
        'title' : 'Estimados anuales poblacionales por municipio',
        'endPoint':'5pce-675z.json',
        'startField' : ['a_asco', 'a_o'],
        'xAxis' : 'Población'
    },
    {
        'nDataSet': '1',
        'title' : 'Beneficiarios de SS por tipo de beneficiario',
        'endPoint':'ypdf-eumz.json',
        'startField' : ['year'],
        'xAxis' : 'Beneficiarios'
    },
    {
        'nDataSet': '2',
        'title' : 'Puestos ocupados totales reportados al FSE por entidad',
        'endPoint':'s7em-rax5.json',
        'startField' : ['month'],
        'xAxis' : 'Cantidad Puestos'
    },
    {
        'nDataSet': '3',
        'title' : 'Indice de Precios de Vivienda de Puerto Rico',
        'endPoint':'ra5v-469u.json',
        'startField' : ['period'],
        'xAxis' : 'Indice de Precios'
    },
   {
        'nDataSet': '4',
        'title' : 'Empleados de producción en la manufactura',
        'endPoint':'3nr5-xx2y.json',
        'startField' : ['month'],
        'xAxis' : 'Empleados'
    },
   {
        'nDataSet': '5',
        'title' : 'Trabajadores incapacitados beneficiarios de seguro social',
        'endPoint':'ua65-6c86.json',
        'startField' : ['year'],
        'xAxis' : 'Trabajadores Incapacitados'
    },
   {
        'nDataSet': '6',
        'title' : 'Puestos ocupados transitorios por entidad gubernamental',
        'endPoint':'55wn-w5pr.json',
        'startField' : ['month'],
        'xAxis' : 'Puestos Ocupados Transitorios'
    },
   {
        'nDataSet': '7',
        'title' : 'Radicaciones de quiebras por capitulo',
        'endPoint':'jkku-t8q6.json',
        'startField' : ['month'],
        'xAxis' : 'Radicaciones'
    },
   {
        'nDataSet': '8',
        'title' : 'Departamento de Educación de PR Matrícula por Grado',
        'endPoint':'qqw3-xfe4.json',
        'startField' : ['school_year'],
        'xAxis' : 'Cantidad Estudiantes'
    }
];

readGraphs = function() {
    var lstDataSets = "";
    $.each(datasets, function(indx, value) {
       // alert(indx);
        lstDataSets += ('<option value="' + indx + '" ');
        if (indx == 0)
            lstDataSets += ('selected');
        lstDataSets += (' >' + value.title + '</option>');
    });
    $('#graphs').html(lstDataSets);
    
};

readFields = function (endPoint) {

    $.getJSON(server , function (data) {
        alert(data);
    });

};

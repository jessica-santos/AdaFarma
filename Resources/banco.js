var db;

function alarme(idDose, idMed, name, composicao, dose, hora){
	this.idDose = idDose;
	this.idMed= idMed;
	this.nome = name;
	this.composicao = composicao;
	this.dose = dose;
	this.hora = hora;
};

function medicamento(name, composicao, concentracao, dose, freq, tipoFreq, duracao, tipoDur, obs){
	this.nome = name;
	this.composicao = composicao;
	this.concentracao = concentracao;
	this.dose = dose;
	this.freq = freq;
	this.tipoFreq = tipoFreq;
	this.duracao = duracao;
	this.tipoDur = tipoDur;
	this.obs = obs;
};

function openDB(){
db = Ti.Database.open('dataBaseDB');
db.execute('CREATE TABLE IF NOT EXISTS medicamento(id INTEGER PRIMARY KEY, nome TEXT, composicao TEXT, concetracao TEXT, dose TEXT, freq INTEGER, tipoFreq TEXT, duracao INTEGER, tipoDur TEXT, obs TEXT);');
db.execute('CREATE TABLE IF NOT EXISTS dose(id INTEGER PRIMARY KEY, idMed INTEGER, data TEXT, hora TEXT, status INTEGER, tomou INTEGER, atrasou INTEGER,  HAY TEXT, FOREIGN KEY(idMed) REFERENCES medicamento);');
};

function insertMed(name, composicao, concentracao, dose, freq, tipoFreq, duracao, tipoDur, obs){
	openDB();
	db.execute('INSERT INTO medicamento(nome, composicao, concentracao, dose, freq, tipoFreq, duracao, tipoDur, obs) VALUES (?,?,?,?,?,?,?,?)', name, composicao, concentracao, dose, freq, tipoFreq, duracao, tipoDur, obs);
	db.close();
};

function insertDose(id, idMed, data, hora, status, tomou, atrasou, HAY){
	openDB();
	db.execute('INSERT INTO dose(id, idMed, data, hora, status, tomou, atrasou, HAY) VALUES (?,?,?,?,?,?,?,?)', id, idMed, data, hora, status, tomou, atrasou, HAY);
	db.close();
};

function selectNextAlarmes(){
	openDB();
	var alarmes = db.execute('SELECT dose.id, dose.idMed medicamento.nome,medicamento.composicao, medicamento.dose, dose.hora FROM medicamento LEFT JOIN dose WHERE dose.idMed = medicamento.id AND dose.status = 1');
	var nextAlarmes = [];	
	while (alarmes.isValidRow())
	{
	  var idDose = alarme.fieldByName('id');
	  var idMed  = alarme.fieldByName('idMed');
	  var nome = alarme.fieldByName('nome');
	  var composicao = alarme.fieldByName('composicao');
	  var dose = alarme.fieldByName('dose');
	  var hora = alarme.fieldByName('hora');
	  nextAlarmes.push(new alarme(idDose, idMed, nome, composicao, dose, hora));
	  alarmes.next();
	}
	alarmes.close();
	db.close();
};

function atualizaDose(id, status){
	openDB();
	db.execute('UPDATE dose SET status=? WHERE id=?',status,id);
	db.close();
}

exports.alarme = alarme;
exports.medicamento = medicamento;

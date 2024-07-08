document.getElementById('modeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Modo Claro';
    } else {
        modeToggle.textContent = 'Modo Oscuro';
    }
});

const translations = {
    es: {
        title: "Calculadora de Resiliencia Estructural",
        capacityLabel: "Capacidad de Carga (kN):",
        lengthLabel: "Longitud del Puente (m):",
        weightLabel: "Peso del Puente (T):",
        temperatureLabel: "Temperatura del Entorno (°C):",
        calculateBtn: "Calcular Resiliencia",
        resetBtn: "Reiniciar",
        resultTitle: "Resultado:",
        error: "excede el máximo permitido.",
        conceptCapacityTitle: "Capacidad de Carga (kN)",
        conceptCapacityDesc: "La capacidad de carga refleja la resistencia máxima del puente antes de la falla estructural. Unidad: kilonewtons (kN)",
        conceptLengthTitle: "Longitud del Puente (m)",
        conceptLengthDesc: "La longitud del puente afecta la distribución de la carga y la estabilidad del puente. Unidad: metros (m)",
        conceptWeightTitle: "Peso del Puente (T)",
        conceptWeightDesc: "El peso del puente influye en la estabilidad y la capacidad de la estructura para soportar su propio peso adicional a las cargas externas. Unidad: toneladas (T)",
        conceptTemperatureTitle: "Temperatura del Entorno (°C)",
        conceptTemperatureDesc: "La temperatura del entorno es una variable crítica que afecta la integridad de los materiales del puente. Unidad: grados Celsius (°C)",
        interpretations: {
            notFeasible: "El puente no es factible de construir.",
            feasibleNotRecommended: "El puente es factible de construir pero no recomendado.",
            feasible: "El puente es factible de construir.",
            recommended: "La construcción del puente es totalmente recomendable."
        }
    },
    en: {
        title: "Structural Resilience Calculator",
        capacityLabel: "Load Capacity (kN):",
        lengthLabel: "Bridge Length (m):",
        weightLabel: "Bridge Weight (T):",
        temperatureLabel: "Environmental Temperature (°C):",
        calculateBtn: "Calculate Resilience",
        resetBtn: "Reset",
        resultTitle: "Result:",
        error: "exceeds the maximum allowed.",
        conceptCapacityTitle: "Load Capacity (kN)",
        conceptCapacityDesc: "Load capacity reflects the maximum resistance of the bridge before structural failure. Unit: kilonewtons (kN)",
        conceptLengthTitle: "Bridge Length (m)",
        conceptLengthDesc: "Bridge length affects the distribution of load and the stability of the bridge. Unit: meters (m)",
        conceptWeightTitle: "Bridge Weight (T)",
        conceptWeightDesc: "Bridge weight influences the stability and capacity of the structure to support its own weight in addition to external loads. Unit: tons (T)",
        conceptTemperatureTitle: "Environmental Temperature (°C)",
        conceptTemperatureDesc: "Environmental temperature is a critical variable that affects the integrity of the bridge materials. Unit: degrees Celsius (°C)",
        interpretations: {
            notFeasible: "The bridge is not feasible to construct.",
            feasibleNotRecommended: "The bridge is feasible to construct but not recommended.",
            feasible: "The bridge is feasible to construct.",
            recommended: "The bridge construction is fully recommended."
        }
    },
    qu: {
        title: "Saqichay Kamachiy",
        capacityLabel: "Llinphiy Kamachiy (kN):",
        lengthLabel: "Chaka Ch'usay (m):",
        weightLabel: "Chaka Wiska (T):",
        temperatureLabel: "Yuyaymay Huk'ukiy (°C):",
        calculateBtn: "Kamachiy Saqichay",
        resetBtn: "Kutiy",
        resultTitle: "Riqsiynin:",
        error: "utqaytaq kayman.",
        conceptCapacityTitle: "Llinphiy Kamachiy (kN)",
        conceptCapacityDesc: "Llinphiy kamachiy huk'uka kayna saqichay hinatatr, llinphiy ranti kamachiyqa. Llinphiy: kilonewtons (kN)",
        conceptLengthTitle: "Chaka Ch'usay (m)",
        conceptLengthDesc: "Chaka ch'usayqa qatinpa kamachiytaq llamk'anin hinaspa chaka saqichay hinatatr. Ch'usay: metros (m)",
        conceptWeightTitle: "Chaka Wiska (T)",
        conceptWeightDesc: "Chaka wiskataq llamk'anin hinaspa kamachiytaq llamk'aninpa urquyninpach, saspa wakin qhawaryninch. Wiska: toneladas (T)",
        conceptTemperatureTitle: "Yuyaymay Huk'ukiy (°C)",
        conceptTemperatureDesc: "Yuyaymay huk'ukiyqa kayna wakin ranti kamachiytaq qhawaryninch. Huk'ukiy: grados Celsius (°C)",
        interpretations: {
            notFeasible: "Kay chakaqa mana saqichakuyta atinqa.",
            feasibleNotRecommended: "Kay chakaqa saqichakuyta atinqa icha mana muspayninchu.",
            feasible: "Kay chakaqa saqichakuyta atinqa.",
            recommended: "Kay chakaqa muspaynin kasqa saqichakuyta atinqa."
        }
    },
    ay: {
        title: "Saqichaña Kamachiy",
        capacityLabel: "Llikhtaña Kamachiy (kN):",
        lengthLabel: "Chakha Thaqui (m):",
        weightLabel: "Chakha Lliwtha (T):",
        temperatureLabel: "Ch’allañaniwa Ch’akhataña (°C):",
        calculateBtn: "Kamachiy Saqichaña",
        resetBtn: "K’uchuña",
        resultTitle: "Nayataki:",
        error: "ukja k’uchuwi kamachinakix utjarakiwa.",
        conceptCapacityTitle: "Llikhtaña Kamachiy (kN)",
        conceptCapacityDesc: "Llikhtaña kamachiy ukhamarak wakiyatawa uka kamachinakx ukjarakiwa uka kamachinak qamsti ukhama llikhtaxa. Llikhtaña: kilonewtons (kN)",
        conceptLengthTitle: "Chakha Thaqui (m)",
        conceptLengthDesc: "Chakha thaquix qhawqhanwa llikhtax ukhama chakha saqichay. Thaqui: metros (m)",
        conceptWeightTitle: "Chakha Lliwtha (T)",
        conceptWeightDesc: "Chakha lliwthawa qawkhana kamachina ukhama wakin uka kamachinakaw ukhama ukjama ukanak chachathaki. Lliwtha: toneladas (T)",
        conceptTemperatureTitle: "Ch’allañaniwa Ch’akhataña (°C)",
        conceptTemperatureDesc: "Ch’allañaniwa ch’akhatañax wakin uka kamachinak qhawqhanwa llikhtaxa ukhama ukxapacha kamachiy. Ch’akhataña: grados Celsius (°C)",
        interpretations: {
            notFeasible: "Kay chakha ukhamarak jan saqichañaniwa.",
            feasibleNotRecommended: "Kay chakha ukhamarak saqichañaniwa ukat jan musparakiwa.",
            feasible: "Kay chakha ukhamarak saqichañaniwa.",
            recommended: "Kay chakha ukhamarak musparakiwa saqichañaniwa."
        }
    }
};

function changeLanguage() {
    const language = document.getElementById('languageSelector').value;
    const translation = translations[language];

    document.getElementById('title').textContent = translation.title;
    document.getElementById('capacity-label').textContent = translation.capacityLabel;
    document.getElementById('length-label').textContent = translation.lengthLabel;
    document.getElementById('weight-label').textContent = translation.weightLabel;
    document.getElementById('temperature-label').textContent = translation.temperatureLabel;
    document.getElementById('calculate-btn').textContent = translation.calculateBtn;
    document.getElementById('reset-btn').textContent = translation.resetBtn;
    document.getElementById('result-title').textContent = translation.resultTitle;
    document.getElementById('concept-capacity-title').textContent = translation.conceptCapacityTitle;
    document.getElementById('concept-capacity-desc').textContent = translation.conceptCapacityDesc;
    document.getElementById('concept-length-title').textContent = translation.conceptLengthTitle;
    document.getElementById('concept-length-desc').textContent = translation.conceptLengthDesc;
    document.getElementById('concept-weight-title').textContent = translation.conceptWeightTitle;
    document.getElementById('concept-weight-desc').textContent = translation.conceptWeightDesc;
    document.getElementById('concept-temperature-title').textContent = translation.conceptTemperatureTitle;
    document.getElementById('concept-temperature-desc').textContent = translation.conceptTemperatureDesc;
}

let calculatedValues = []; // Array para almacenar los valores calculados

function calculateResilience() {
    const capacity = parseFloat(document.getElementById('capacity').value);
    const length = parseFloat(document.getElementById('length').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const temperature = parseFloat(document.getElementById('temperature').value);

    if (isNaN(capacity) || isNaN(length) || isNaN(weight) || isNaN(temperature)) {
        alert('Please enter valid numbers');
        return;
    }

    const maxCapacity = 600;
    const maxLength = 200;
    const maxWeight = 100;
    const maxTemperature = 40;

    if (capacity > maxCapacity) {
        alert(`Capacidad de Carga excede el máximo permitido (${maxCapacity} kN)`);
        return;
    }
    if (length > maxLength) {
        alert(`Longitud del Puente excede el máximo permitido (${maxLength} m)`);
        return;
    }
    if (weight > maxWeight) {
        alert(`Peso del Puente excede el máximo permitido (${maxWeight} T)`);
        return;
    }
    if (temperature > maxTemperature) {
        alert(`Temperatura del Entorno excede el máximo permitido (${maxTemperature} °C)`);
        return;
    }

    const Ro = 0.0012 * capacity + 0.0009 * length + 0.0006 * weight + 0.0003 * temperature;
    document.getElementById('resilienceOutput').textContent = `Resiliencia Estructural: ${Ro.toFixed(3)}`;

    let interpretation = '';
    if (Ro < 0) {
        interpretation = "El puente no es factible de construir.";
    } else if (Ro < 0.3) {
        interpretation = "El puente es factible de construir pero no recomendado.";
    } else if (Ro < 0.6) {
        interpretation = "El puente es factible de construir.";
    } else {
        interpretation = "La construcción del puente es totalmente recomendable.";
    }
    document.getElementById('interpretationOutput').textContent = interpretation;

    // Almacenar los valores calculados
    calculatedValues.push({ capacity, length, weight, temperature, Ro });

    // Limitar a los últimos 5 cálculos
    if (calculatedValues.length > 5) {
        calculatedValues.shift();
    }

    // Generar gráfica 3D con Plotly.js
    generate3DGraph();
}

function generate3DGraph() {
    const maxCapacity = 600;
    const maxLength = 200;
    const maxWeight = 100;
    const maxTemperature = 40;

    let x = [];
    let y = [];
    let z = [];

    for (let i = 0; i <= maxCapacity; i += 50) {
        let rowX = [];
        let rowY = [];
        let rowZ = [];
        for (let j = 0; j <= maxLength; j += 20) {
            rowX.push(i);
            rowY.push(j);
            rowZ.push(0.0012 * i + 0.0009 * j + 0.0006 * maxWeight + 0.0003 * maxTemperature);
        }
        x.push(rowX);
        y.push(rowY);
        z.push(rowZ);
    }

    const surfaceData = {
        x: x,
        y: y,
        z: z,
        type: 'surface',
        colorscale: 'Viridis',
        name: 'Valores Máximos'
    };

    let scatterData = [];
    calculatedValues.forEach((calc, index) => {
        scatterData.push({
            x: [calc.capacity],
            y: [calc.length],
            z: [calc.Ro],
            mode: 'markers',
            marker: {
                size: 8,
                color: `hsl(${index * 60}, 100%, 50%)` // Colores distintos para cada cálculo
            },
            type: 'scatter3d',
            name: `Cálculo ${index + 1}`
        });
    });

    const layout = {
        title: 'Comparación de Resiliencia Estructural',
        scene: {
            xaxis: { title: 'Capacidad de Carga (kN)' },
            yaxis: { title: 'Longitud del Puente (m)' },
            zaxis: { title: 'Resiliencia (Ro)' }
        },
        showlegend: true
    };

    Plotly.newPlot('graph', [surfaceData, ...scatterData], layout);
}

function resetForm() {
    calculatedValues = [];
    document.getElementById('resilienceOutput').textContent = '';
    document.getElementById('interpretationOutput').textContent = '';
    Plotly.purge('graph');
}

function showConcept(conceptId) {
    hideAllConcepts();
    document.getElementById(conceptId).style.display = 'block';
}

function hideAllConcepts() {
    const concepts = document.querySelectorAll('.concept');
    concepts.forEach(concept => {
        concept.style.display = 'none';
    });
}

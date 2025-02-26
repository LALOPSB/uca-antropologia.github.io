import {
    MODULE_TITLE_1,
    CLASS_INTEGRATION_TEXT_1,
    MODULE_ITEMS_1,
    MODULE_TITLE_2,
    CLASS_INTEGRATION_TEXT_2,
    MODULE_ITEMS_2,
    MODULE_TITLE_3,
    CLASS_INTEGRATION_TEXT_3,
    MODULE_ITEMS_3,
    MODULE_TITLE_4,
    CLASS_INTEGRATION_TEXT_4,
    MODULE_ITEMS_4,
    MODULE_TITLE_5,
    CLASS_INTEGRATION_TEXT_5,
    MODULE_ITEMS_5,
    EXTRA_TEXT_5
} from '../constants/moduleTexts.js';

renderModuleContent('module-1', MODULE_TITLE_1, CLASS_INTEGRATION_TEXT_1, MODULE_ITEMS_1);
renderModuleContent('module-2', MODULE_TITLE_2, CLASS_INTEGRATION_TEXT_2, MODULE_ITEMS_2);
renderModuleContent('module-3', MODULE_TITLE_3, CLASS_INTEGRATION_TEXT_3, MODULE_ITEMS_3);
renderModuleContent('module-4', MODULE_TITLE_4, CLASS_INTEGRATION_TEXT_4, MODULE_ITEMS_4);
renderModuleContent('module-5', MODULE_TITLE_5, CLASS_INTEGRATION_TEXT_5, MODULE_ITEMS_5, EXTRA_TEXT_5);

function renderModuleContent(containerId, title, integrationText, items, extraText = '') {
    // Genera el contenido dinámicamente
    const moduleHeader = `<header style="margin-bottom: 5px;"><h5>${title}</h5></header>`;
    const moduleList = `<ol style="list-style-type: decimal; margin: 15px";>${items.map(item => `<li>${item}</li>`).join('')}</ol>`;
    const classIntegration = `<p>${integrationText}</p>`;
    const moduleExtraText = `<p style="margin-top: 15px;">${extraText}</p>`;
    // Inserta el contenido en el contenedor especificado por "containerId"
    document.getElementById(containerId).innerHTML = `${moduleHeader}${moduleList}${classIntegration}${moduleExtraText}`;
}

import {Slider}   from '../model';
import {loadJson} from '../../../utils/index.js';

export default async function appendClients( clientContainer, clientsJSON ) {
  try {
    const clients = await loadJson(clientsJSON);
    const slider = new Slider(clients).render();
    clientContainer.appendChild(slider);
  } catch(e) {
    console.error(e);
  }
}
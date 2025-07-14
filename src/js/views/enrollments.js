import {getEntries} from '../services/storage.js';
import {getCurrentUser} from "../services/auth.js";

export async function renderEnrollments(tag) {
    const userId = getCurrentUser().userId;
    const enrollments = await getEntries('enrollments');
    const userEnrollments = enrollments.filter(enrollment => enrollment.userId === userId);

    tag.innerHTML = `
        <section class="table-container enroll">
            <table class="event-table">
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Descripton</th>
                    <th></th>
                    <th>Date</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                ${userEnrollments.map(event => `
                <tr>
                    <td><img src="https://picsum.photos/200" alt="Event picture"></td>
                    <td>${event.name}</td>
                    <td>${event.description}</td>
                    <td></td>
                    <td>${event.date}</td>
                    <td></td>
                    <td></td>
                </tr>
                `).join('')}
                </tbody>
            </table>
        </section>`
}
import React from "react";
//Hali - added this page to display example reservations. Added table to display data
function ReservationTable() {
    return (
        <table class="text-left ml-64 mr-64 mt-64 bg-white">
  <thead >
    <tr class="bg-blue-500">
      <th class="px-4 py-2" width="15%">Title</th>
      <th class="px-4 py-2" width="40%">Author</th>
      <th class="px-4 py-2" width="45%">Views</th>
    </tr>
  </thead>
  <tbody >
    <tr>
      <td class="border px-4 py-2">Intro to CSS</td>
      <td class="border px-4 py-2">Adam</td>
      <td class="border px-4 py-2">858</td>
    </tr>
    <tr >
      <td class="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td class="border px-4 py-2">Adam</td>
      <td class="border px-4 py-2">112</td>
    </tr>
    <tr>
      <td class="border px-4 py-2">Intro to JavaScript</td>
      <td class="border px-4 py-2">Chris</td>
      <td class="border px-4 py-2">1,280</td>
    </tr>
  </tbody>
</table>
    )
  }

export default ReservationTable
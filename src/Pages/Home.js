import React from "react";
// Hali - added the title text from the mock ups, and added the large version of the logo.
function Home() {
  return (
    <table>
      <tr>
        <td colSpan="2">
          <div class="ml-48">
            <img
              class="ml-64"
              src="logolarge.png"
              alt="Large Logo"
              height="400"
              width="400"
            />
          </div>
        </td>
      </tr>
      <tr>
        <td width="50%">
          <div class="font-sans text-lg font-medium tracking-tighter text-black-800 text-right pl-24 pr-16">
            "Reserve to Dine" is a web app for making online, dine-in
            reservations at restaurants. With "Reserve to Dine", hungry patrons
            simply login, select their favorite restaurant, and reserve their
            table from the available selection. Users can view available times
            and quickly access key information such as table location and
            seating arrangements.
          </div>
        </td>
        <td width="50%">
          <div class="font-sans text-lg font-medium tracking-tighter text-black-800 text-left pl-16 pr-24">
            Restaurant accounts can easily import table information and update
            available listings in real time to maximize their turnover. They can
            also view a detailed report with all the daily reservation
            information for their records.
          </div>
        </td>
      </tr>
      <tr>
        <td colSpan="2" class="text-center font-medium tracking-tighter pt-20">
          Reserve To Dine is a collaborative effort of Franco Mattos, Robert
          DeZerga, Hali Toreihi, and Justin Plank ©2020 for CEN 3722 Human
          Computer Interfaces at the Daytona State College.
        </td>
      </tr>
    </table>
  );
}

export default Home;

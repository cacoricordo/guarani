/************************************************************************************************************
iframePopUp
Copyright (C) 2014  Cybersora.Com

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public
License along with this library; If not, see <http://www.gnu.org/licenses/>.

Cybersora.Com., hereby disclaims all copyright interest in this script.

************************************************************************************************************/

function newPopUp(str){
	document.getElementById("backpop").style.display = "block";
	window.popupPage.location.href = str;
}

function closeme(){
	document.getElementById("backpop").style.display = "none";
	window.popupPage.location.href= 'loading.gif';
}
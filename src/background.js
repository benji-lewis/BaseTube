// SPDX-FileCopyrightText: (C) 2024 Ben Lewis <oss@benjilewis.dev>
//
// SPDX-License-Identifier: SSPL-1.0

chrome.action.onClicked.addListener(function() {
	chrome.tabs.create({ url: 'html/baseTube.html' });
  });
  
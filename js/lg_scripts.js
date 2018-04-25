function changeTab(tabs,tab) {

	tab = document.getElementById(tab.id);
	tabList = document.getElementById(tabs.id);

	tabContent = document.getElementById(tab.id+'Content');
	tabContentGroup = document.getElementById(tabs.id+'Group');

	i=0;

	while (typeof tabContentGroup.getElementsByTagName('div')[i] != 'undefined'){
		$(document).ready(function(){
			$(tabContentGroup.getElementsByTagName('div')[i]).css('display','none');
			$(tabContentGroup.getElementsByTagName('div')[i]).css('opacity','0');
			$(tabList.getElementsByTagName('li')[i]).removeClass('active');
		});
		i += 1;
	}

	$(document).ready(function(){
		$(tabContent).css('display','');
		$(tabContent).css('opacity','1');
		$(tab).addClass('active');
	});

}
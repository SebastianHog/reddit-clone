export const navigateTo = (screenName: string, navigation: any, data: any) => {
	if (!data || !screenName || !navigation) return;
	if (data.length < 1) return;
	navigation.navigate(screenName, data.author ? data.author : { data });
};

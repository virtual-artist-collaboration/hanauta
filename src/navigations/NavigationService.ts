import {
  NavigationActions,
  StackActions,
  NavigationContainerComponent,
} from 'react-navigation';

let navigator: NavigationContainerComponent;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerComponent | null,
) {
  if (navigatorRef === null) {
    return;
  }

  navigator = navigatorRef;
}

export function navigate(routeName: string, params?: object) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export function push(routeName: string, params?: object) {
  navigator.dispatch(
    StackActions.push({
      routeName,
      params,
    }),
  );
}

export function pop(n = 1) {
  navigator.dispatch(
    StackActions.pop({
      n,
    }),
  );
}

export function reset(routeName: string, params?: object) {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({routeName, params})],
  });
  navigator.dispatch(resetAction);
}

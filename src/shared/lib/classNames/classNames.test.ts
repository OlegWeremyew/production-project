import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expectedClassNames = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expectedClassNames);
  });

  test('with one mode value equal false', () => {
    const expectedClassNames = 'someClass class1 class2 hovered';
    expect(
      classNames(
        'someClass',
        { hovered: true, scrollable: false },
        ['class1', 'class2'],
      ),
    )
      .toBe(expectedClassNames);
  });

  test('with one mode value equal undefined', () => {
    const expectedClassNames = 'someClass class1 class2 hovered';
    expect(
      classNames(
        'someClass',
        { hovered: true, scrollable: undefined },
        ['class1', 'class2'],
      ),
    )
      .toBe(expectedClassNames);
  });
});

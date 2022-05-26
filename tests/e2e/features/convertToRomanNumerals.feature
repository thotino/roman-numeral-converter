Feature: Convert numbers to roman numerals

    We are testing the conversion
  Scenario: The conversion should be valid
    When the user inputs 9
    Then the converter should return 'IX'

Scenario Outline: The conversion should be valid
    When the user inputs <DecimalNumber>
    Then the converter should return <RomanNumeral>
    Examples:
        | DecimalNumber | RomanNumeral |
        | 15            | "XV"         |
        | 25            | "XXV"        |
        
    

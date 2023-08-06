// component/__test__/highlightHTMLContent.test.js
import HighlightHTMLContent from "../highlightHTMLContent.js";
import { render } from "@testing-library/react";



//1. testing for initial setup
test("test", () => {
  const header = render(<HighlightHTMLContent />);
  //  console.log(header)
});

let htmlContent =
  "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
const plainText =
  "Hi David Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar… Read the full article here ------------------------------------- You received this because you are subscribed to news related to ES0113900J37 , and this story was marked as 82% relevant. Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. To unsubscribe change your email preferences, please click here . -------------------------------------";
// const plainTextPositions = [
//   {
//       start: 241,
//       end: 247,
//     },
//     {
//         start: 518,
//         end: 525,
//     },
// ];







//2. Test with a valid highlight position that starts and ends within the content(sample input given in assignment)
test("Test with a valid highlight position within content", () => {
  const expectedResult =
    "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Equity</mark> scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
  const result = HighlightHTMLContent(htmlContent, plainText, 241, 247);
  expect(result).toBe(expectedResult);
});

  






  //3. Test with a valid highlight position that starts and ends within the content(sample input given in assignment)
  test("Test with a valid highlight position starting at the beginning", () => {
    const expectedResult =
    "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | <mark>Privacy</mark> Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
  
    const result = HighlightHTMLContent(htmlContent, plainText, 518, 525);
    expect(result).toBe(expectedResult);
  });
  





  //4. Test with a invalid highlight position that begins and ends at last
  test("Test with a valid highlight position ending at the end", () => {
    const expectedResult =
      "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<mark></mark><br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, plainText.length, plainText.length);
    expect(result).toBe(expectedResult);
  });
  





  //5. Test with an invalid highlight position where end is before start
  test("Test with invalid highlight positions (end before start)", () => {
    const expectedResult =
    "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, 855, 0);
    expect(result).toBe(expectedResult);
  });




  
  //6. Test with an invalid highlight position that is out of bounds of the content length
  test("Test with invalid highlight positions (out of bounds)", () => {
    const expectedResult =
    "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, 1000, 2000);
    expect(result).toBe(expectedResult);
  });




  //7. Test with an invalid highlight position that start and ends at same position
  test("Test with invalid highlight positions (out of bounds)", () => {
    const expectedResult =
    "<p><span>H<mark></mark>i David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, 1, 1);
    expect(result).toBe(expectedResult);
  });




  //8. Test with a invalid highlight position that begins and ends at 0th position
  test("Test with invalid highlight positions (out of bounds)", () => {
    const expectedResult =
    "<p><span><mark></mark>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, 0, 0);
    expect(result).toBe(expectedResult);
  });





//9. Test with a valid highlight position that starts at the beginning of the content and ending at end
  test("Test with invalid highlight positions (out of bounds)", () => {
    const expectedResult =
    "<p><span><mark>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility Equity scale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------</mark><br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const result = HighlightHTMLContent(htmlContent, plainText, 0, plainText.length);
    expect(result).toBe(expectedResult);
  });



   //10. Test with an valid highlight position where two beginning and two ending overlap to make it highlight from lowest value of beginning to highest value of ending
   test("Test with invalid highlight positions (end before start)", () => {
    const expectedResult =
    "<p><span>Hi David<br><br>Headline: Energix Closes $520 Million Financing and Tax Equity Deal to Fund New Solar Projects<br><br>Summary: Two deals with Morgan Stanley Renewables Inc. and Santander CIB will help finance the construction and operation of six utility <mark>Eq<mark>uity</mark> sc</mark>ale solar…<br><br>Read the full article <a href='https://content.seleritycorp.com/hosted/assets/www/UKMW47_hYz_RGzPSpHm44Hi1L49HdNBhs1OkKKW2OPI'>here</a><br><br>-------------------------------------<br><br>You received this because you are subscribed to news related to <a href='https://iris.steeleye.co/market/instruments?search=ES0113900J37'>ES0113900J37</a>, and this story was marked as 82% relevant.<br><br>Copyright of PR Newswire. All Rights Reserved. Terms and Conditions | Privacy Policy. To stop PR Newswire emails from getting removed by email filters please add our address (noreply@prnewswire.com) to your email address book. Registered Office: 3 Spring Mews, London SE11 5AN. Tel: +44 (0) 207 8405100. <br><br>To unsubscribe change your email preferences, please click <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>here</a>.<br><br>-------------------------------------<br><br><img src='https://context.seleritycorp.com/selerity/assets/sc_icons/pressRelease.png' alt='Rick Astley' style='width:100px;height:100px;'></span></p>";
    const plainTextPositions = [
      {
          start: 241,
          end: 247,
        },
        {
            start: 243,
            end: 250,
        },
    ];
    plainTextPositions.map((element)=>{
      if(element.start<=element.end ){
        
        htmlContent=(HighlightHTMLContent(htmlContent, plainText,element.start,element.end));
    // const result = HighlightHTMLContent(htmlContent, plainText,element.start,element.end);  
    }});
    expect(htmlContent).toBe(expectedResult);
  });
  
    // console.log(htmlContent);
   


    
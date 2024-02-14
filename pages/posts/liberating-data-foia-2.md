---
title: Liberating data with FOIA, part 2
date: 2024/2/14
description: On FOIA-ing government databases
tag: data, foia, investigations
author: You
---
![FOIA header image](/images/2024/FOIA-banner.jpg)

* *This post first appeared on the [Cornell Tech DLI 'Critical Reflections' blog](https://www.dli.tech.cornell.edu/post/liberating-data-with-foia-part-ii).*


# _Liberating Data with FOIA (Part 2)_

In [part 1](/posts/liberating-data-foia-1) of this series we explored some general techniques for identifying datasets and databases maintained by government agencies, based on understanding where and how such agencies are required to notify the public about their data collection practices.

Here in part 2, we’ll look at how to formally request records that have been identified, through the lens of one specific FOIA request that I filed in collaboration with the [Data Liberation Project](https://www.data-liberation-project.org/) (DLP).


## The topic: Peace Corps volunteer resignations

While scanning through notices in the Federal Register – a technique mentioned in [part 1](/posts/liberating-data-foia-1) – I came across an entry that [itemized most of the systems of records](https://www.federalregister.gov/documents/2000/09/05/00-22559/privacy-act-of-1974-systems-of-records) maintained by the Peace Corps. 

Founded 60 years ago under the Kennedy administration, Peace Corps is a program that sends US volunteers overseas to work on international development projects. Due to some intentional parallels with military service, in most circumstances volunteers must finish a deployment of at least two years to be considered to have completed their service. 

Looking through the records linked above, I saw references to database **PC–7**, which tracks Peace Corps volunteers’ reasons for taking early resignation before ending their service. This seems like potentially interesting data to have about any voluntary organization, but is especially so when resigning means failing to complete an assigned mission abroad.

Browsing documents published on the Peace Corps website, we can see that the organization does already [publish reports on resignations](https://files.peacecorps.gov/documents/open-government/FY_2020_Early_Termination_Report.pdf) each year. These reports contain data on reasons for what the organization calls “early termination,” but the statistics only give a broad, aggregated picture.

![Peace Corps Early Terminations](/images/2024/PeaceCorps_EarlyTerminations.jpg)

In the chart above we see that 0% of volunteers were terminated early due to _administrative separation_ – the equivalent of being made to leave involuntarily by management (effectively, being fired). But here’s another interesting piece of information mentioned in the above report: 

> Volunteers who no longer wish to continue their Peace Corps service may resign. With certain exceptions, Volunteers who are informed by their country director that they will be administratively separated from the Peace Corps can be given a 24-hour window to voluntarily resign from service. If they choose this alternative, their ET is categorized as a resignation in lieu of administrative separation.

So in all data released by Peace Corps, the numbers for **Resignation** also include volunteers who would have received **Administrative Separation** but chose to proactively resign after being informed that they would be discharged. 

It seems that getting more specific information about these numbers is in the public interest – so now it’s time to write a records request.

## Crafting a request

FOI law explicitly states that requests don't need to be crafted in legal or technical language to get a response. In practice though, government agencies have a habit of evading or simply declining requests they don't really want to comply with, so it's a good idea to draft a request in a way that doesn't leave a lot of room for them to fudge on any of the details.

Thanks to advice and template examples from the DLP, the request that we sent to Peace Corps is carefully argued: it makes legal citations of the [Freedom of Information Act](https://www.justice.gov/oip/freedom-information-act-5-usc-552) (U.S.C. §552 _et. seq_.) and various clauses within it, along with footnoted references to the research materials that have informed our understanding of the data being requested. That's useful because the request itself is a public document of sorts, and would be a point of reference in a case in which we needed to take legal action to compel disclosure.

![alt_text](/images/2024/DLP_FOIA_request_extract.png)

_Screenshot of part of the joint FOIA request_

The request was also informed by a number of telephone conversations with the Peace Corps’ government information specialist. Most government agencies employ one, and their mandate is to be a liaison between the agency and members of the public seeking information; they will usually be the main point of contact for anyone filing a FOIA request, whether a journalist or private citizen.

In this case, the information officer let us know that the database we were requesting had been subsumed into another, larger system of records, which helped us target it with an up to date name and description in the final request.

## Five things to note

The [full text of the request](https://www.documentcloud.org/documents/23736388-2023-03-31-peace-corps-resignations-data-foia-request-faifesinger-vine) runs to five pages, so here are a few points with noting, with quotes from our letter to Peace Corps:

1. **We start with context, explaining clearly what data we understand to be contained in the database we’re targeting:**

        > If a Peace Corps volunteer chooses to resign from their position … an assessment of the reason for this resignation is made by a supervising staff officer and collected via Form MS-284 Attachment D (‘Resignation Form’). According to a Federal Register notice, data collected through this form is stored in the system of records known as PC-7.

2. **We outline _how_ this data can be extracted from the database with minimal burden:**

        > To the extent that the requested records are stored as structured information in a database, it should be possible to withhold non-disclosable data fields without the need to individually review or redact such records, and without the need to withhold any other portion of those records.

3. **We anticipate and address arguments for withholding information:**

        > While initial conversations with Peace Corps staff suggested that OSIRP considers the reasons-for-resignation aspect of the records to be non-disclosable because it is ‘based on opinion,’ that position does not appear to be supported by any of the Freedom of Information Act’s exemptions.”

4.**We specify the _format_ in which we would like to receive the data:**

        > We request these records in their native digital format and not in formats that degrade the accessibility of the records. In instances where the same information from a given form submission is stored both in an original PDF/Excel/Word form submission and as structured information in a database, we request only the database records for that particular submission.

5. **We make an argument as to why this information is in the public interest:**

        > According to the Peace Corps’ most recent Early Termination report, ‘Given the central role of Volunteers in advancing the Peace Corps mission, ETs reduce the agency’s ability to contribute to the project goals and objectives that have been jointly established by the Peace Corps and the host country. This can affect the Peace Corps’ relationship with the host country and/or host communities.’ In light of this, the public deserves the chance to fully understand issues that may curtail the effectiveness of the program.


We also request a fee waiver on the basis that information is not being sought for commercial interest, and ask that if any material is withheld, the response should make reference to the relevant exemption as detailed. 

This last provision quickly became relevant once our request received a response.

## The first response: claims of exemption

Having had some fruitful conversations with the information officer during the research process, I was (perhaps naïvely) disappointed by the initial response, where the same officer made a decision to redact most of the relevant figures in the document we were sent.

![alt_text](/images/2024/DLP_FOIA_redaction.png)

_Screenshot of the initial response from Peace Corps with redactions_

The image above shows the response that we initially received. It looks to be the output of a count operation performed on a database table, but while we can see the different resignation reasons in the left column, the number of volunteers who chose each one has been redacted.

Unfortunately that means this response doesn’t help us much at all, especially if our goal is to liberate government data in a format suitable for further analysis. If we want to get hold of that data, we’ll need to understand the reasons for withholding it, so that we can make an appeal.

## Appealing deliberative process privilege

Looking closely, you can see that the gray redaction box in the image above has a label that reads **(b)(5)**. That’s because Peace Corps argued the information being withheld fell under FOIA exemption (b)(5), which [protects deliberative process privilege](https://www.justice.gov/archives/oip/foia-guide-2004-edition-exemption-5).

This exemption exists so that government employees can openly discuss policies and decisions they are debating without worrying that they would be compelled to disclose unfinalized details in a way that would hurt their ability to shape a process that is underway. The carve-out makes sense in theory, but also creates a pathway for FOIA respondents to deny a wide range of requests with the claim that the requested information is part of ongoing deliberations. (It’s for that reason that some freedom of information advocates call it the [“withhold it because you want to” exemption](https://www.muckrock.com/news/archives/2018/mar/05/foia-exemption-b5/).)

Thankfully, getting a FOIA request denied doesn’t mean you’ve hit a brick wall. It just means it’s time to do some more research, review some [strategies for challenging exemptions](https://foia.wiki/wiki/Deliberative_Process_Privilege#Strategies_for_challenging_deliberative_process_withholdings), and put some of these arguments in an appeal letter. 

Since exemption (b)(5) protects deliberative privilege, in [our appeal](https://www.documentcloud.org/documents/23870105-2023-07-10-appeal-of-foia-23-0102) we argued that “though policy decisions may be made on the basis of this data — as is true of all data collected by government agencies — the data we request does not in itself contain recommendations towards policies that would be prematurely disclosed by releasing it.” We also referenced information we had received in the initial response from Peace Corps noting that the Attachment D form was being dropped from the volunteer exit interview process. On these grounds, we argued that “if this form and the data it collects is no longer needed by the agency, it follows that the data is not considered crucial to the Peace Corps deliberative process, and therefore would not be covered by exemption (b)(5).”

## Second response: data received

Not long after filing the appeal, we received a new response. It was good news: the data on reasons for resignation was released without redaction and in a user-friendly format, and is now [available on the DLP website](https://www.data-liberation-project.org/datasets/peace-corps-resignations/).

The process took about six months from start to finish. Some FOIA requests will yield data in a shorter space of time, while others may take longer – so journalists that use FOIA as a regular part of their reporting usually try to have a number of requests in progress at any given time. 

If you’re interested in learning more, you can [subscribe to the Data Liberation Project’s newsletter](https://www.data-liberation-project.org/newsletter/) for updates, read through the extensive [FOIA wiki](https://foia.wiki/wiki/Main_Page), or try out [automated tools like MuckRock](https://www.muckrock.com/about/how-we-work/). 

**Good luck!**
/* Life Basics content. mc questions list the correct option FIRST (o[0]); options are shuffled at runtime.
   sec = Pearson VUE NC Life Agent outline section (I-V). */
const LEVELS = [
{
 id:0, sec:"I", title:"Term, whole life, and endowments", sub:"The core policy types and the ways premiums can be paid",
 cards:[
 {h:"Two families: temporary and permanent", b:`
<p>Every life policy is either <b>term</b> (temporary) or <b>permanent</b> (whole life and its cousins). Almost every question in this section comes back to that split.</p>
<table class="t"><tr><th></th><th>Term</th><th>Whole life</th></tr>
<tr><td>Lasts</td><td>A set number of years</td><td>Whole life (matures at age 100 or 121)</td></tr>
<tr><td>Cash value</td><td>None</td><td>Yes, guaranteed, grows tax-deferred</td></tr>
<tr><td>Premium</td><td>Cheapest at the start</td><td>Higher, but level for life</td></tr>
<tr><td>Best for</td><td>Big need, small budget, temporary need</td><td>Lifetime need, forced savings</td></tr></table>
<p class="aside">Term is "pure protection." If the question says the policy builds cash value, it's not term.</p>`},
 {h:"Term insurance: level, decreasing, increasing", b:`
<ul class="defs">
<li><b>Level term</b>: face amount stays the same for the whole term (10, 20, 30 years). Premium is usually level for the term too.</li>
<li><b>Decreasing term</b>: face amount shrinks over time, premium stays level. Built for a debt that shrinks, like a mortgage. "Mortgage life" is usually decreasing term.</li>
<li><b>Increasing term</b>: face amount grows, often sold as a rider (for example, cost-of-living or return-of-premium riders).</li>
<li><b>Annually renewable term (ART)</b>: a one-year term that renews each year at a higher premium. The purest form of term.</li>
</ul>
<p class="example">Kim has a 30-year, $300,000 mortgage. Decreasing term matches the loan: as the balance drops, so does the coverage.</p>`},
 {h:"Term features: renewable and convertible", b:`
<ul class="defs">
<li><b>Renewable</b>: you can renew at the end of the term <b>without proving insurability</b>. The catch: the new premium is based on your <b>attained age</b> (your age at renewal), so it goes up.</li>
<li><b>Convertible</b>: you can switch the term policy to a permanent policy <b>without proving insurability</b>. Converting at attained age = higher premium, no back payment. Converting at original age = lower premium, but you pay the difference in back premiums (plus interest).</li>
</ul>
<p class="aside">Exam trap: neither feature needs a medical exam. That's the whole point. "Evidence of insurability" is what you're skipping.</p>
<p><b>Mnemonic:</b> Renew = same plan, older age. Convert = new plan (permanent), no health questions.</p>`},
 {h:"Whole life: the permanent standard", b:`
<ul class="defs">
<li><b>Level premium</b> for life, <b>level death benefit</b>, and a <b>guaranteed cash value</b> that grows on a set schedule.</li>
<li>The policy <b>endows</b> (cash value equals the face amount) at maturity: age 100 under older mortality tables, age 121 under current ones. At that point the owner gets the face amount.</li>
<li>Early premiums are higher than the actual cost of insurance. The excess builds the cash value. Later, the cash value helps pay for the rising cost of insurance.</li>
<li>Owner can borrow against the cash value or surrender the policy for it.</li>
</ul>
<p>Also called <b>ordinary life</b> or <b>straight life</b> when premiums are paid until death or maturity.</p>`},
 {h:"Endowments", b:`
<p>An <b>endowment</b> policy builds cash value fast so that it equals the face amount on a set date (the <b>maturity date</b> or endowment date), for example at age 65 or after 20 years.</p>
<ul class="defs">
<li>If the insured dies before that date, the beneficiary gets the face amount.</li>
<li>If the insured is alive on that date, the <b>owner</b> gets the face amount. The policy "endows."</li>
<li>Premiums are high, because cash value has to grow quickly.</li>
</ul>
<p class="aside">Every whole life policy is technically an endowment at age 100 or 121. An "endowment policy" just endows much earlier. Under current tax law most new endowments fail the definition of life insurance, so they're rare. They still show up on the exam.</p>`},
 {h:"Premium variations", b:`
<table class="t"><tr><th>Type</th><th>How it works</th></tr>
<tr><td><b>Single premium</b></td><td>One payment buys the whole policy. Instant cash value.</td></tr>
<tr><td><b>Level / continuous / straight</b></td><td>Same premium every year until death or maturity.</td></tr>
<tr><td><b>Limited pay</b></td><td>Pay for a set period (20-pay, life paid-up at 65), then the policy is paid up for life. Higher premiums, faster cash value.</td></tr>
<tr><td><b>Adjustable / flexible</b></td><td>Owner can change premium, face amount, or period (adjustable life, universal life).</td></tr>
<tr><td><b>Modified</b></td><td>Lower premium for the first few years (often 3-5), then a <b>single jump</b> to a higher level premium.</td></tr>
<tr><td><b>Graded</b></td><td>Premium <b>rises each year</b> for the first several years (5-10), then levels off.</td></tr>
<tr><td><b>Indeterminate</b></td><td>Insurer charges a current premium below a guaranteed maximum, and can raise it up to that max.</td></tr></table>
<p><b>Mnemonic:</b> Modified = one step up. Graded = a staircase.</p>`}
 ],
 cheat:[
 "Term = temporary, no cash value, cheapest per dollar of coverage. Whole life = permanent, level premium, guaranteed cash value.",
 "Level term: face stays the same. Decreasing term: face shrinks, premium level (mortgages). Increasing term: face grows (usually a rider).",
 "Renewable: renew without evidence of insurability, premium at attained age. Convertible: switch to permanent without evidence of insurability.",
 "Whole life endows at age 100 (older tables) or 121 (current tables): cash value = face amount.",
 "Endowment: cash value equals face on a set maturity date. Dies first: beneficiary gets face. Lives: owner gets face.",
 "Limited pay (20-pay, paid-up at 65) = higher premiums, faster cash value, paid up early.",
 "Modified premium = low for a few years, then one jump. Graded premium = rises yearly for several years, then levels.",
 "Indeterminate premium = insurer can raise the current premium up to a guaranteed maximum."
 ],
 quiz:[
 {t:"mc", q:"Which policy provides pure protection with no cash value?", o:["Term life","Whole life","Endowment","Limited pay life"], why:"Term is temporary protection only. Whole life, endowments, and limited pay all build cash value."},
 {t:"mc", tag:"Scenario", q:"A couple wants coverage that matches their mortgage balance as it's paid down. Which policy fits best?", o:["Decreasing term","Level term","Increasing term","Single premium whole life"], why:"Decreasing term has a face amount that drops over time, the way a mortgage balance does, with a level premium."},
 {t:"mc", q:"A term policy's renewability option lets the owner renew without what?", o:["Proving insurability","Paying a higher premium","Signing anything","Naming a beneficiary"], why:"Renewal skips evidence of insurability, but the premium goes up because it's based on attained age."},
 {t:"mc", q:"When a term policy is renewed, the new premium is based on the insured's:", o:["Attained age","Original issue age","Age at the first premium","Age 65"], why:"Renewal premiums are based on the insured's current (attained) age, which is why they rise each renewal."},
 {t:"mc", tag:"Scenario", q:"Marcus converts his term policy to whole life at his original age. What must he usually do?", o:["Pay the premium difference back to the original issue date, with interest","Take a new medical exam","Wait for the term to expire","Nothing; original-age conversions are free"], why:"An original-age conversion gives a lower premium but requires back premiums (the difference) plus interest. No medical exam is needed."},
 {t:"mc", q:"At what point does a whole life policy endow under current mortality tables?", o:["Age 121","Age 65","Age 85","When the last premium is paid"], why:"Under the 2001 and newer CSO tables, whole life matures at age 121. Older policies matured at 100."},
 {t:"mc", q:"Which statement about whole life is true?", o:["The premium is level and the cash value is guaranteed","The face amount decreases each year","It has no cash value until age 65","The premium increases every year"], why:"Traditional whole life has a level premium, a level death benefit, and guaranteed cash values."},
 {t:"mc", tag:"Scenario", q:"Ana's 20-year endowment policy matures and she's alive. Who gets the face amount?", o:["Ana, the policyowner","Her beneficiary","The insurer keeps it","Her estate"], why:"When an endowment matures with the insured alive, the face amount goes to the owner. The beneficiary gets it only if the insured dies first."},
 {t:"mc", q:"A policy that's fully paid after 20 annual premiums but covers the insured for life is:", o:["Limited pay whole life","Level term","Endowment at 20","Annually renewable term"], why:"Limited pay (here, 20-pay life) compresses premiums into a shorter period, but coverage lasts for life."},
 {t:"mc", q:"Which premium arrangement starts low for a few years and then jumps to a higher level amount?", o:["Modified premium","Graded premium","Single premium","Indeterminate premium"], why:"Modified = one step up after an initial low period. Graded = premiums rise every year for several years, then level off."},
 {t:"mc", q:"A graded premium whole life policy has premiums that:", o:["Increase each year for an initial period, then level off","Never change","Are paid all at once","Decrease each year"], why:"Graded premiums climb annually for the first 5 to 10 years, then stay level."},
 {t:"mc", q:"Under an indeterminate premium policy, the insurer:", o:["Can raise the current premium up to a guaranteed maximum","Can raise the premium without limit","Must lower the premium each year","Can never change the premium"], why:"Indeterminate premium policies show a current premium and a guaranteed maximum. The insurer can adjust within that range."},
 {t:"mc", q:"Which policy builds cash value the fastest?", o:["Single premium whole life","Straight (continuous premium) whole life","20-year level term","Annually renewable term"], why:"Paying the whole cost up front creates immediate cash value. Term has none at all."}
 ]
},
{
 id:1, sec:"I", title:"Combination and flexible policies", sub:"Joint and survivorship, juvenile, universal life, and variable life",
 cards:[
 {h:"Combination policies", b:`
<p>Many policies are just whole life with term bolted on.</p>
<ul class="defs">
<li><b>Multiple (double or triple) protection</b>: whole life plus level term, so the death benefit is 2x or 3x until a set age or date. After that, only the base whole life remains.</li>
<li><b>Term riders</b>: extra term coverage added to a permanent policy, on the insured or on someone else (an "other insured" rider).</li>
<li><b>Family policy / family rider</b>: whole life on the main breadwinner, plus term on the spouse and term on each child (including future children, usually automatically).</li>
<li><b>Face amount plus cash value</b>: an increasing term rider equal to the cash value, so the beneficiary gets the face <i>plus</i> the cash value.</li>
<li><b>Face amount plus return of premium</b>: an increasing term rider equal to premiums paid, so the beneficiary gets the face <i>plus</i> premiums paid, if death happens in the rider period.</li>
</ul>`},
 {h:"Joint life vs. survivorship life", b:`
<table class="t"><tr><th></th><th>Joint life</th><th>Survivorship (last survivor)</th></tr>
<tr><td>Covers</td><td>Two or more people</td><td>Two people</td></tr>
<tr><td>Pays at</td><td><b>First</b> death. Policy ends.</td><td><b>Second</b> death</td></tr>
<tr><td>Premium</td><td>Higher than one policy, cheaper than two</td><td>Lowest of the three (two deaths must happen)</td></tr>
<tr><td>Common use</td><td>Couples, business partners</td><td>Paying estate taxes after both spouses die</td></tr></table>
<p><b>Mnemonic:</b> Joint = "first to die." Survivorship = "second to die."</p>`},
 {h:"Juvenile and jumping juvenile", b:`
<ul class="defs">
<li><b>Juvenile life</b>: a policy on a child, owned by a parent or guardian. Cheap because children are low risk.</li>
<li><b>Jumping juvenile</b> (estate builder): the face amount automatically increases, usually <b>5 times</b>, at a set age (often 21), with <b>no evidence of insurability and no premium increase</b>.</li>
<li><b>Payor benefit rider</b>: if the adult paying the premium dies or becomes disabled, premiums are waived until the child reaches a set age (often 21 or 25).</li>
</ul>
<p><b>Limited benefit policies</b> pay only for specific causes or in limited amounts (for example, accidental death only, or a graded benefit in the early years). Read the trigger before you assume coverage.</p>`},
 {h:"Universal life (UL)", b:`
<p>UL is flexible, permanent coverage with the pieces <b>unbundled</b>: the insurer shows separately what goes to the <b>mortality charge</b> (cost of insurance), <b>expense charges</b>, and the <b>interest credited</b> to the cash value.</p>
<ul class="defs">
<li><b>Flexible premium</b>: pay more, less, or skip, as long as the cash value covers the monthly deductions. If it can't, the policy lapses.</li>
<li><b>Target premium</b>: the suggested premium to keep the policy in force on the insurer's assumptions. Not a guarantee.</li>
<li><b>Guaranteed values</b>: a minimum interest rate and maximum mortality charges are guaranteed. Current rates can be better.</li>
<li><b>Adjustable face amount</b>: increases usually need evidence of insurability. Decreases don't.</li>
<li>Partial <b>withdrawals</b> are allowed and reduce the death benefit. Loans are also available.</li>
</ul>
<p class="aside">"Adjustable life" is a close relative: the owner can change face amount, premium, and period, switching between term-like and whole-life-like configurations.</p>`},
 {h:"UL death benefit options and the corridor", b:`
<ul class="defs">
<li><b>Option A (Option 1), level</b>: death benefit = face amount. As cash value grows, the insurer's real risk (the "net amount at risk") shrinks.</li>
<li><b>Option B (Option 2), increasing</b>: death benefit = face amount <b>plus</b> cash value. Costs more because the amount at risk stays level.</li>
<li><b>Option C (Option 3)</b>, where offered: face amount plus premiums paid.</li>
</ul>
<p><b>Corridor of insurance</b>: federal tax law (IRC 7702) requires a minimum gap between the death benefit and the cash value for the policy to count as life insurance. If cash value grows too big, the insurer raises the death benefit to keep the corridor.</p>
<p><b>Mnemonic:</b> A = Always the same. B = Bigger (face plus cash).</p>`},
 {h:"Interest-sensitive and variable products", b:`
<ul class="defs">
<li><b>Interest-sensitive whole life</b> (current assumption whole life): fixed premium like whole life, but cash value is credited at <b>current</b> interest rates. Good results can lower the premium or build more cash value. Bad results can raise the premium (up to a max) or reduce the face.</li>
<li><b>Variable life</b>: fixed premium, cash value invested in a <b>separate account</b> of sub-accounts (like mutual funds). Owner bears the investment risk. Cash value is <b>not</b> guaranteed. Death benefit has a guaranteed minimum (the original face).</li>
<li><b>Variable universal life (VUL)</b>: UL's flexible premium and death benefit, plus variable life's separate account investing. Most risk, most flexibility.</li>
</ul>
<p class="aside">Selling any variable product takes a state life license (in NC, also the Variable Life and Variable Annuity line) <b>plus</b> FINRA securities registration. A prospectus must be delivered.</p>`}
 ],
 cheat:[
 "Multiple protection = whole life + level term (2x or 3x) until a set age.",
 "Family policy = whole life on the main insured + term on spouse + term on kids.",
 "Face plus cash value / face plus return of premium = increasing term riders added to the base.",
 "Joint life pays at the FIRST death. Survivorship (second-to-die) pays at the SECOND death and is cheapest; used for estate taxes.",
 "Jumping juvenile: face jumps (usually 5x) at a set age, no evidence of insurability, no premium increase.",
 "Payor benefit rider: waives a child's policy premiums if the adult payor dies or is disabled.",
 "UL = flexible premium, adjustable face, unbundled (mortality, expense, interest shown separately). Target premium is a suggestion, not a guarantee.",
 "UL Option A = level death benefit. Option B = face + cash value. Corridor = the IRS-required gap between death benefit and cash value.",
 "Interest-sensitive (current assumption) whole life = fixed premium, cash value credited at current rates.",
 "Variable life/VUL = separate account, owner bears investment risk, needs state license + FINRA registration + prospectus."
 ],
 quiz:[
 {t:"mc", q:"A joint life policy covering a husband and wife pays the death benefit:", o:["At the first death","At the second death","Only if both die together","At age 100"], why:"Joint life is first-to-die. Survivorship life is the one that pays at the second death."},
 {t:"mc", tag:"Scenario", q:"A wealthy couple wants money to pay estate taxes after both of them have died, at the lowest premium. What fits?", o:["Survivorship (second-to-die) life","Joint life","Two decreasing term policies","Family income policy"], why:"Estate taxes often hit after the second spouse dies. Survivorship life pays then, and it's cheaper because two deaths must occur."},
 {t:"mc", q:"A jumping juvenile policy's face amount typically increases at age 21 by:", o:["Five times, with no evidence of insurability or premium change","Double, with a medical exam","Ten times, with a higher premium","Nothing; only cash value increases"], why:"Jumping juvenile policies jump (usually 5x) at a set age with no evidence of insurability and the premium stays the same."},
 {t:"mc", q:"A rider that waives premiums on a child's policy if the parent paying premiums dies or becomes disabled is the:", o:["Payor benefit rider","Guaranteed insurability rider","Cost of living rider","Accidental death rider"], why:"The payor benefit rider covers the adult paying the premium on a juvenile policy."},
 {t:"mc", q:"A family policy usually provides:", o:["Whole life on the main insured and term on the spouse and children","Term on the main insured only","Separate whole life policies on each family member","An annuity for the spouse"], why:"The family policy is permanent coverage on the breadwinner, with term coverage on the spouse and kids."},
 {t:"mc", q:"Universal life is called 'unbundled' because:", o:["Mortality charges, expense charges, and interest credited are shown separately","It has no cash value","It must be bought with other policies","Its premium is bundled into one fixed amount"], why:"UL breaks out its three moving parts so the owner can see what each is doing."},
 {t:"mc", tag:"Scenario", q:"Under UL Option B, Jen has a $250,000 face amount and $40,000 cash value. What's the death benefit?", o:["$290,000","$250,000","$210,000","$40,000"], why:"Option B (increasing) pays face plus cash value. Option A would pay the $250,000 face."},
 {t:"mc", q:"Under UL Option A, as the cash value grows the insurer's net amount at risk:", o:["Decreases","Increases","Stays the same","Doubles"], why:"With a level death benefit, more of it is made up of the owner's own cash value, so the insurer's real risk shrinks."},
 {t:"mc", q:"The 'corridor' in a universal life policy refers to:", o:["The required gap between death benefit and cash value to stay life insurance under tax law","The grace period","The range of allowed premium payments","The time before the policy endows"], why:"IRC 7702 requires a minimum spread between the death benefit and cash value. The insurer raises the death benefit if needed."},
 {t:"mc", q:"A UL policy will lapse when:", o:["The cash value can't cover the monthly deductions","A premium is skipped","The owner changes death benefit options","Interest rates fall below the target"], why:"UL premiums are flexible. Lapse happens when the cash value runs too low to pay the cost of insurance and expenses."},
 {t:"mc", q:"Which policy has a fixed premium but credits cash value based on current interest rates?", o:["Interest-sensitive (current assumption) whole life","Variable life","Level term","Graded premium whole life"], why:"Current assumption whole life keeps a fixed premium while reflecting current interest and mortality in its values."},
 {t:"mc", q:"In variable life insurance, who bears the investment risk?", o:["The policyowner","The insurer","FINRA","The beneficiary only"], why:"Cash value in a separate account rises and falls with the investments. The owner takes that risk; only the minimum death benefit is guaranteed."},
 {t:"mc", q:"To sell variable universal life, a producer needs:", o:["A state life license (with variable authority) and FINRA securities registration","Only a state life license","Only FINRA registration","An SEC investment adviser license only"], why:"Variable products are both insurance and securities. They take state insurance licensing and FINRA registration."}
 ]
},
{
 id:2, sec:"II", title:"Annuities, the exam version", sub:"Only 5 questions. A fast review of what the outline lists",
 cards:[
 {h:"The annuity principle", b:`
<p>Life insurance protects against dying too soon. An annuity protects against <b>living too long</b> and running out of money. It's the <b>systematic liquidation of an estate</b>: a lump of money turned into income that can last for life.</p>
<ul class="defs">
<li><b>Accumulation period</b>: money goes in and grows tax-deferred.</li>
<li><b>Annuitization (payout) period</b>: money comes out as income.</li>
<li><b>Annuitant</b>: the person whose life the payments are based on. The <b>owner</b> holds the rights. The <b>beneficiary</b> gets any death benefit.</li>
</ul>
<p class="aside">Insurers pool annuitants: people who die early "fund" those who live long. That's why only a life insurer can promise income for life.</p>`},
 {h:"How you pay in, and how it grows", b:`
<ul class="defs">
<li><b>Single premium</b>: one lump sum.</li>
<li><b>Installment (periodic) premium</b>: <b>fixed</b> (set amount on a schedule) or <b>flexible</b> (pay what you want, when you want).</li>
</ul>
<table class="t"><tr><th>Type</th><th>Growth</th><th>Who bears risk</th></tr>
<tr><td><b>Fixed</b></td><td>Guaranteed minimum interest rate</td><td>Insurer</td></tr>
<tr><td><b>Variable</b></td><td>Separate account sub-accounts</td><td>Owner. It's a security: FINRA + prospectus</td></tr>
<tr><td><b>Equity-indexed</b></td><td>Credited based on an index (like the S&P 500), with a floor (often 0%), cap, and participation rate</td><td>Mostly insurer: principal protected from index losses</td></tr></table>`},
 {h:"When payments start, and on how many lives", b:`
<ul class="defs">
<li><b>Immediate</b>: bought with a single premium; first payment within <b>one year</b> (often one month).</li>
<li><b>Deferred</b>: payments start later. Can be single or installment premium.</li>
<li><b>Single life</b>: one annuitant.</li>
<li><b>Joint life</b>: two annuitants; payments <b>stop at the first death</b>.</li>
<li><b>Joint and survivor</b>: payments continue (in full or reduced, like 2/3 or 1/2) until the <b>last</b> death.</li>
</ul>
<p><b>Guarantee before the annuity starting date</b>: during accumulation, if the owner/annuitant dies, the beneficiary typically gets the greater of premiums paid or the accumulated value. Surrender charges may apply to early withdrawals, but not usually to the death benefit.</p>`},
 {h:"Payout guarantees", b:`
<table class="t"><tr><th>Option</th><th>Pays</th><th>Size of check</th></tr>
<tr><td><b>Straight (pure) life</b></td><td>For life, nothing after death, even if that's next month</td><td>Largest</td></tr>
<tr><td><b>Life with period certain</b></td><td>For life, but at least a set period (10 years, say). Beneficiary gets the rest of the period</td><td>Smaller</td></tr>
<tr><td><b>Cash refund</b></td><td>For life; at death, beneficiary gets a lump sum of premium minus payments made</td><td>Smaller</td></tr>
<tr><td><b>Installment refund</b></td><td>Same, but the refund continues as payments</td><td>Smaller</td></tr></table>
<p><b>Rule of thumb:</b> the more the insurer guarantees beyond your life, the smaller each check.</p>`}
 ],
 cheat:[
 "Annuity = protection against living too long. Systematic liquidation of an estate.",
 "Accumulation (pay in, grows tax-deferred) then annuitization (payout).",
 "Single premium vs installment (fixed or flexible).",
 "Fixed = guaranteed minimum rate, insurer's risk. Variable = separate account, owner's risk, a security. Indexed = index-linked with a floor and cap.",
 "Immediate = first payment within 1 year, single premium. Deferred = later.",
 "Joint life stops at first death. Joint and survivor continues to the last death.",
 "Straight life pays the most per check and leaves nothing. Period certain and refund options pay less per check."
 ],
 quiz:[
 {t:"mc", q:"An annuity mainly protects against the risk of:", o:["Outliving your money","Dying too soon","Disability","Property loss"], why:"Life insurance covers dying too soon. Annuities cover living too long."},
 {t:"mc", q:"An immediate annuity must make its first payment within:", o:["One year of purchase","Five years","Ten years","Age 59½"], why:"Immediate annuities start income within a year, usually after one payment period."},
 {t:"mc", q:"Which payout option gives the highest income per check?", o:["Straight (pure) life","Life with 10-year period certain","Cash refund","Joint and survivor"], why:"Straight life has no guarantee beyond the annuitant's life, so each payment can be larger."},
 {t:"mc", tag:"Scenario", q:"Ed chose a life annuity with 10 years certain. He dies after 4 years. What happens?", o:["His beneficiary gets payments for the remaining 6 years","Payments stop","His beneficiary gets a lump sum of all premiums","The insurer refunds the 4 years paid"], why:"The period certain guarantees at least 10 years of payments. The beneficiary receives the remaining 6."},
 {t:"mc", q:"Under a joint life annuity (not joint and survivor), payments:", o:["Stop at the first death","Continue until the last death","Go to the estate","Double at the first death"], why:"Joint life ends at the first death. Joint and survivor keeps paying until the second death."},
 {t:"mc", q:"In a fixed annuity, the investment risk is borne by:", o:["The insurer","The annuitant","FINRA","The state guaranty association"], why:"The insurer guarantees a minimum interest rate and the principal. In a variable annuity the owner takes the risk."},
 {t:"mc", q:"A variable annuity's values are based on:", o:["The performance of separate account investments","A guaranteed fixed rate","A stock index with a 0% floor","The insurer's general account only"], why:"Variable annuities invest in separate account sub-accounts, so they're registered securities."},
 {t:"mc", q:"An equity-indexed annuity credits interest based on:", o:["The change in a market index, subject to caps and participation rates","Mutual fund returns directly","Only the insurer's guaranteed rate","Dividends from the insurer"], why:"Indexed annuities track an index like the S&P 500, with a floor protecting principal and a cap or participation rate limiting gains."},
 {t:"mc", q:"A flexible premium deferred annuity allows the owner to:", o:["Vary the amount and timing of premium payments","Receive income immediately","Skip all taxes","Invest directly in stocks"], why:"Flexible premium means deposits can vary. Deferred means payout starts later."},
 {t:"mc", q:"An installment refund annuity pays at the annuitant's death:", o:["Continued payments to the beneficiary until total payments equal the premium","Nothing","A lump sum equal to double the premium","Interest only"], why:"Installment refund keeps paying the beneficiary until the premium is returned. Cash refund pays that difference as a lump sum."}
 ]
},
{
 id:3, sec:"III", title:"Policy provisions and beneficiaries", sub:"The standard clauses, exclusions, and who gets paid",
 cards:[
 {h:"The clauses up front", b:`
<ul class="defs">
<li><b>Insuring agreement (clause)</b>: the insurer's basic promise to pay the death benefit. Usually on the first page.</li>
<li><b>Ownership clause</b>: the owner holds the rights: name and change beneficiaries, borrow, surrender, assign, pick options. The owner and insured can be different people.</li>
<li><b>Entire contract clause</b>: the policy plus the attached application <b>is</b> the whole contract. Nothing else counts unless attached. The insurer can't change it without the owner's consent.</li>
<li><b>Consideration</b>: the applicant's part is the application statements plus the first premium. The insurer's part is the promise to pay.</li>
</ul>`},
 {h:"Grace, incontestability, misstatement of age (NC numbers)", b:`
<p>North Carolina requires these in every individual life policy (G.S. 58-58-22):</p>
<ul class="defs">
<li><b>Grace period: 31 days</b> to pay any premium after the first. Coverage stays in force. If the insured dies during grace, the insurer pays the claim minus the premium due.</li>
<li><b>Incontestable after 2 years</b>: once the policy has been in force for 2 years from issue, the insurer can't void it for statements in the application (nonpayment of premium is the exception).</li>
<li><b>Misstatement of age or gender</b>: the benefit is adjusted to what the premium paid would have bought at the correct age or gender. The policy is not voided.</li>
</ul>
<p class="aside">Exam trap: misstatement of age is fixed by <b>adjusting the benefit</b>, even after the contestable period. It's not "contesting" the policy.</p>`},
 {h:"Suicide, reinstatement, assignment", b:`
<ul class="defs">
<li><b>Suicide</b>: NC lets the policy exclude suicide for no more than <b>2 years</b> from issue. Suicide in that window = at least a <b>refund of premiums</b> paid. After 2 years, the full benefit is paid.</li>
<li><b>Reinstatement</b>: a lapsed policy (not surrendered for cash) can be reinstated within <b>5 years</b> of default in NC. Requirements: written application, <b>evidence of insurability</b>, all overdue premiums with interest, and repayment of any loans with interest.</li>
<li>Why reinstate instead of buying new? You keep your <b>original issue age</b> and rates, plus any cash value and old policy terms. A reinstated policy gets a <b>new contestable period</b>, but only for statements in the reinstatement application (G.S. 58-58-170).</li>
<li><b>Absolute assignment</b>: transfers all ownership rights permanently, like a sale or gift.</li>
<li><b>Collateral assignment</b>: temporary and partial, to secure a loan. The lender gets what it's owed; the rest goes to the beneficiary.</li>
</ul>`},
 {h:"Other provisions on the outline", b:`
<ul class="defs">
<li><b>Conversion / change of plan</b>: lets the owner switch policy types (term to permanent, or between permanent plans) under set terms.</li>
<li><b>Excess interest provision</b>: credits interest above the guaranteed rate when the insurer earns more.</li>
<li><b>Free look</b>: the owner can return a new policy within a set number of days after delivery for a <b>full refund</b>. Under the NC replacement rule, a replacement policy gets a <b>30-day</b> right to return.</li>
<li><b>Withdrawal provisions</b>: partial withdrawals of cash value (UL and similar). They reduce cash value and death benefit.</li>
<li><b>Additional / other insured</b>: adds a spouse or child, usually through a term rider.</li>
<li><b>War exclusion</b>: <b>status</b> type excludes any death while in military service, wherever and however it happens. <b>Results</b> type excludes only deaths caused by war. Results is narrower.</li>
<li><b>Aviation exclusion</b>: usually excludes deaths of pilots and crew on non-commercial flights. Fare-paying passengers on commercial airlines are covered.</li>
</ul>`},
 {h:"Beneficiaries", b:`
<ul class="defs">
<li><b>Primary</b>: first in line. <b>Contingent</b> (secondary): paid only if no primary is alive. <b>Tertiary</b>: third in line.</li>
<li><b>Revocable</b>: the owner can change it anytime. <b>Irrevocable</b>: the beneficiary has a <b>vested interest</b>; the owner needs the beneficiary's consent to change them, borrow, or assign.</li>
<li><b>Named vs. class</b>: "Jane Smith" vs. "my children." A class designation can catch children born later, but it can be unclear.</li>
<li><b>Estate</b>: if no beneficiary is named or alive, proceeds go to the insured's estate and can be exposed to probate and creditors.</li>
<li><b>Minors</b> can't receive proceeds directly. Name a trust or a custodian (or a guardian is appointed), or the money sits until one is in place.</li>
<li><b>Per capita</b> ("by the head"): split among living named beneficiaries. <b>Per stirpes</b> ("by the branch"): a deceased beneficiary's share passes to their children.</li>
</ul>`},
 {h:"Common disaster and changing beneficiaries", b:`
<ul class="defs">
<li><b>Uniform Simultaneous Death Act</b>: if the insured and the primary beneficiary die and there's no evidence of who died first, the law treats the <b>insured as surviving the beneficiary</b>. Proceeds go to the contingent beneficiary, or to the insured's estate if none.</li>
<li><b>Common disaster (short-term survivorship) clause</b>: requires the primary beneficiary to outlive the insured by a set period (like 14 or 30 days) to collect. Otherwise the contingent gets paid. This stops proceeds from passing through two estates.</li>
<li><b>Changing the beneficiary</b>: the owner has the right if the designation is revocable. Methods: <b>recording (filing)</b>, where you send written notice and the change is effective when the insurer records it (most common); or <b>endorsement</b>, where the policy goes back to the insurer to be endorsed.</li>
</ul>`}
 ],
 cheat:[
 "Entire contract = policy + attached application. Nothing else counts.",
 "NC: grace period 31 days. Death during grace: pay benefit minus the premium owed.",
 "NC: incontestable after 2 years in force. Exception: nonpayment of premium.",
 "Misstatement of age or gender: adjust the benefit to what the premium would buy. Don't void.",
 "NC: suicide exclusion max 2 years, with at least a refund of premiums.",
 "NC: reinstate within 5 years (if not surrendered). Needs application, evidence of insurability, back premiums + interest, loan repayment. Keeps original age.",
 "Absolute assignment = permanent full transfer. Collateral = temporary, partial, loan security.",
 "War: status = any death in service. Results = only deaths caused by war.",
 "Revocable = owner can change. Irrevocable = vested; needs beneficiary's consent.",
 "Simultaneous death: insured is presumed to survive the beneficiary, so proceeds go to the contingent (or estate).",
 "Per capita = by the head. Per stirpes = by the branch (kids inherit a deceased beneficiary's share).",
 "Beneficiary change methods: recording/filing (most common) vs endorsement."
 ],
 quiz:[
 {t:"mc", q:"Under the entire contract clause, the contract consists of:", o:["The policy and the attached application","The policy, the agent's notes, and the brochure","Only the policy","Anything the insurer has on file"], why:"Only the policy and the attached application make up the contract. Nothing else can be added by reference."},
 {t:"mc", q:"In North Carolina, the grace period for individual life insurance premiums after the first is:", o:["31 days","10 days","30 days","60 days"], why:"G.S. 58-58-22(1) requires a 31-day grace period with the death benefit in force."},
 {t:"mc", tag:"Scenario", q:"Leo misses his premium due May 1 and dies May 20 without paying. What happens?", o:["The insurer pays the death benefit minus the unpaid premium","The claim is denied because the premium wasn't paid","The insurer pays double","The insurer refunds premiums only"], why:"He died during the 31-day grace period, so coverage was in force. The insurer may deduct the overdue premium."},
 {t:"mc", q:"In NC, a life policy becomes incontestable after it has been in force for:", o:["2 years from issue","1 year","3 years","5 years"], why:"G.S. 58-58-22(2): after two years in force, the insurer can't contest validity except for nonpayment of premium."},
 {t:"mc", tag:"Scenario", q:"Five years after issue, the insurer learns the insured understated her age by 4 years. What happens at her death?", o:["The benefit is adjusted to what the premiums would have bought at the correct age","The policy is void","The full face is paid with no change","The insurer refunds premiums only"], why:"Misstatement of age is handled by adjusting the benefit, regardless of the incontestable period."},
 {t:"mc", q:"Under NC law, a suicide exclusion can apply for no longer than:", o:["2 years from issue","1 year","3 years","The life of the policy"], why:"G.S. 58-58-22(4) caps it at two years and requires at least a return of premiums."},
 {t:"mc", q:"Which is NOT normally required to reinstate a lapsed life policy?", o:["A new beneficiary designation","Evidence of insurability","Payment of overdue premiums with interest","Repayment of outstanding loans"], why:"Reinstatement needs an application, evidence of insurability, back premiums with interest, and loan repayment. Beneficiaries don't change."},
 {t:"mc", q:"Under NC's standard provisions, a lapsed policy that wasn't surrendered can be reinstated within:", o:["5 years after the premium default","31 days","2 years","10 years"], why:"G.S. 58-58-22(5) allows reinstatement any time within five years after default, subject to the listed requirements."},
 {t:"mc", tag:"Scenario", q:"Sam pledges his policy to a bank as security for a $50,000 loan. This is a(n):", o:["Collateral assignment","Absolute assignment","Change of beneficiary","Viatical settlement"], why:"A collateral assignment is temporary and limited to the debt. The bank gets what it's owed; the rest goes to the beneficiary."},
 {t:"mc", q:"A war exclusion that denies the claim for any death while the insured is in the military, even from illness at home, is the:", o:["Status type","Results type","Aviation type","Incontestable type"], why:"Status type looks at whether the insured was in service. Results type only excludes deaths caused by war."},
 {t:"mc", q:"An irrevocable beneficiary:", o:["Must consent before the owner can change the beneficiary or take a loan","Can be changed by the owner at any time","Has no rights until the insured dies","Must be the insured's spouse"], why:"An irrevocable beneficiary has a vested interest, so the owner needs their consent for changes affecting it."},
 {t:"mc", tag:"Scenario", q:"Mia (insured) and her husband (primary beneficiary) die in a car crash. No one can tell who died first. Their son is contingent. Who gets the proceeds?", o:["The son, the contingent beneficiary","The husband's estate","Mia's employer","The proceeds are forfeited"], why:"Under the Uniform Simultaneous Death Act the insured is presumed to have survived the beneficiary, so the contingent gets paid."},
 {t:"mc", q:"A beneficiary designation of 'my children, per stirpes' means that if one child dies before the insured:", o:["That child's share goes to the child's own children","That child's share is split among the surviving children","That share goes to the insurer","The whole designation is void"], why:"Per stirpes passes a share down the family branch. Per capita splits among the survivors."}
 ]
},
{
 id:4, sec:"III", title:"Cash values, dividends, payouts, and riders", sub:"Nonforfeiture, loans, dividends, settlement options, premium mechanics, riders",
 cards:[
 {h:"Nonforfeiture options: you don't lose your cash value", b:`
<p>If a permanent policy lapses, state nonforfeiture law says the owner keeps the cash value. Three options:</p>
<ul class="defs">
<li><b>Cash surrender</b>: take the cash value (minus any loans and surrender charges). Coverage ends.</li>
<li><b>Reduced paid-up</b>: use the cash value as a single premium for a smaller policy of the <b>same type</b> (whole life), paid up for life. Smaller face, lasts forever.</li>
<li><b>Extended term</b>: use the cash value to buy <b>term</b> insurance for the <b>same face amount</b>, for as long as the money lasts. Same face, limited time.</li>
</ul>
<p class="aside">If the owner doesn't pick, the default (automatic) option is usually <b>extended term</b>.</p>
<p><b>Mnemonic:</b> Reduced paid-up = Reduced face. Extended term = Extended (limited) time at full face.</p>`},
 {h:"Policy loans and the right to defer", b:`
<ul class="defs">
<li>The owner can borrow up to the cash value (less interest in advance). No credit check, no required repayment schedule.</li>
<li>Loan interest is <b>fixed</b> or <b>variable</b> (adjustable, tied to an index), as stated in the policy.</li>
<li>Unpaid loans plus interest are <b>subtracted from the death benefit</b>. If the loan balance grows past the cash value, the policy can lapse.</li>
<li><b>Automatic premium loan</b>: if a premium isn't paid by the end of the grace period, the insurer borrows it from the cash value automatically to keep the policy in force. Usually added at the owner's request, at no cost.</li>
<li><b>Right to defer</b>: the insurer can delay paying a cash surrender value or loan for up to <b>6 months</b> (except loans to pay premiums). It protects insurers from a "run on the bank."</li>
</ul>`},
 {h:"Dividends", b:`
<p><b>Participating</b> policies (usually from mutual insurers) pay <b>dividends</b>: a <b>return of excess premium</b> when the insurer's mortality, expenses, or investments beat its assumptions. Dividends are <b>never guaranteed</b>, and they aren't taxable income until they exceed premiums paid.</p>
<p>Dividend options:</p>
<ol class="steps">
<li><b>Cash</b>.</li>
<li><b>Reduce premium</b>: applied to the next premium.</li>
<li><b>Accumulate at interest</b>: left with the insurer. The dividend isn't taxable, but the <b>interest is</b>.</li>
<li><b>Paid-up additions</b>: buys small single-premium chunks of the same insurance, no evidence of insurability needed.</li>
<li><b>One-year term</b> (the "fifth dividend option"): buys one-year term, often capped at the cash value.</li>
</ol>`},
 {h:"Settlement options: how the death benefit is paid", b:`
<ul class="defs">
<li><b>Lump sum (cash)</b>: the default, paid all at once. Income-tax-free.</li>
<li><b>Interest only</b>: insurer holds the principal and pays interest; principal paid later. Interest is taxable.</li>
<li><b>Fixed period</b>: pays principal plus interest over a set <b>time</b> (say 10 years). The check size depends on the period.</li>
<li><b>Fixed amount</b>: pays a set <b>dollar amount</b> until the money runs out. The period depends on the check size.</li>
<li><b>Life income</b>: annuity-style payments for the beneficiary's life (straight life, period certain, refund, or joint and survivor).</li>
</ul>
<p>The <b>owner</b> can choose the option in advance (and lock it in). If the owner doesn't, the <b>beneficiary</b> can choose at the insured's death.</p>
<p class="aside">Any installment option: the principal portion is tax-free; the interest portion is taxable.</p>`},
 {h:"Premium payments and what's inside a premium", b:`
<ul class="defs">
<li><b>Modes</b>: annual, semi-annual, quarterly, monthly. Paying more often costs more in total, because the insurer loses interest and has more billing costs.</li>
<li><b>Nonpayment</b>: after the grace period, the policy lapses (or a nonforfeiture option or automatic premium loan kicks in).</li>
<li>A premium is built from three factors: <b>mortality</b> (cost of the death risk), <b>interest</b> (what the insurer expects to earn, which lowers the premium), and <b>expense</b> (the insurer's costs, also called the load).</li>
<li><b>Front-end load</b>: expense deducted from each premium up front. <b>Back-end load</b>: charged when the owner surrenders, like a surrender charge.</li>
</ul>
<p><b>Mnemonic:</b> M-I-E: Mortality and Expense push the premium up; Interest pulls it down.</p>`},
 {h:"Riders and optional benefits", b:`
<ul class="defs">
<li><b>Waiver of premium</b>: premiums are waived if the insured becomes totally disabled, after a waiting period (often 6 months). Premiums paid during the waiting period are usually refunded. Often only for disabilities that start before a set age, like 60 or 65.</li>
<li><b>Waiver of monthly deduction</b> (universal life): waives the monthly cost of insurance and expense deductions during disability. It doesn't pay a target premium into the policy.</li>
<li><b>Accidental death (double indemnity)</b>: pays an extra amount (often equal to the face) if death is accidental, usually within <b>90 days</b> of the accident. <b>AD&D</b> adds dismemberment: the <b>principal sum</b> for death, a <b>capital sum</b> (often half) for loss of a limb or sight.</li>
<li><b>Guaranteed insurability</b>: lets the insured buy more coverage at set ages or events (marriage, birth of a child) without evidence of insurability, usually up to around age 40.</li>
<li><b>Payor benefit</b> (juvenile): waives premiums if the adult payor dies or is disabled.</li>
<li><b>Cost of living rider</b>: increases coverage (usually through term) in line with the CPI, often without evidence of insurability.</li>
<li><b>Change of contract</b>: lets the owner exchange the policy for another plan.</li>
</ul>`}
 ],
 cheat:[
 "Nonforfeiture: cash surrender, reduced paid-up (smaller face, permanent), extended term (same face, limited time). Default is usually extended term.",
 "Loans: up to cash value; fixed or variable interest; unpaid loans reduce the death benefit; lapse if the loan exceeds the cash value.",
 "Automatic premium loan: insurer borrows the overdue premium from cash value at the end of the grace period.",
 "Right to defer cash value or loan payments: up to 6 months (not for loans that pay premiums).",
 "Dividends = return of excess premium, not guaranteed, not taxable. Interest on accumulated dividends IS taxable.",
 "Dividend options: cash, reduce premium, accumulate at interest, paid-up additions, one-year term.",
 "Settlement options: lump sum, interest only, fixed period (time set), fixed amount (dollars set), life income. Owner picks first; else beneficiary.",
 "Premium factors: mortality, interest, expense. More frequent payment modes cost more overall.",
 "Front-end load = taken from premiums. Back-end load = taken at surrender.",
 "Waiver of premium: waiting period (often 6 months), retroactive refund. UL version = waiver of monthly deduction.",
 "AD&D: principal sum for death, capital sum for dismemberment. Accidental death usually within 90 days.",
 "Guaranteed insurability: more coverage at set dates/events, no evidence of insurability."
 ],
 quiz:[
 {t:"mc", q:"Which nonforfeiture option gives the same face amount for a limited time?", o:["Extended term","Reduced paid-up","Cash surrender","Automatic premium loan"], why:"Extended term keeps the full face as term coverage for as long as the cash value can buy it."},
 {t:"mc", q:"Which nonforfeiture option gives permanent coverage with a smaller face amount and no more premiums?", o:["Reduced paid-up","Extended term","Cash surrender","Paid-up additions"], why:"Reduced paid-up uses the cash value as a single premium for a smaller paid-up policy of the same type."},
 {t:"mc", q:"If a policyowner stops paying and doesn't choose a nonforfeiture option, the one usually applied automatically is:", o:["Extended term","Reduced paid-up","Cash surrender","Interest only"], why:"Most policies default to extended term if no election is made."},
 {t:"mc", tag:"Scenario", q:"Ty has a $100,000 policy with a $12,000 outstanding loan plus $600 of unpaid loan interest. He dies. What does the beneficiary get?", o:["$87,400","$100,000","$88,000","$112,600"], why:"Unpaid loans and interest are subtracted from the death benefit: $100,000 - $12,000 - $600 = $87,400."},
 {t:"mc", q:"An automatic premium loan provision:", o:["Borrows the overdue premium from the cash value to prevent a lapse","Lends money to the beneficiary","Pays premiums if the insured is disabled","Lets the insurer cancel the policy"], why:"At the end of the grace period, the insurer borrows the premium from cash value so the policy stays in force."},
 {t:"mc", q:"The insurer's right to delay paying a cash surrender value is generally limited to:", o:["6 months","31 days","1 year","2 years"], why:"The delay (deferral) provision allows up to six months, mainly to protect the insurer in a financial crisis."},
 {t:"mc", q:"Policy dividends are considered:", o:["A return of excess premium, not taxable income","Guaranteed earnings","Taxable investment income","A loan from the insurer"], why:"Dividends refund overcharged premium, so they aren't taxed unless they exceed total premiums paid. They're never guaranteed."},
 {t:"mc", q:"Which part of a dividend option creates taxable income?", o:["Interest earned on dividends left to accumulate","Dividends taken in cash","Dividends used to reduce premiums","Dividends used to buy paid-up additions"], why:"The dividend itself isn't taxable, but interest it earns while accumulating is."},
 {t:"mc", tag:"Scenario", q:"A widow wants the $200,000 death benefit paid as $2,000 a month for as long as it lasts. Which settlement option is that?", o:["Fixed amount","Fixed period","Interest only","Life income"], why:"A set dollar amount per payment is fixed amount. If she'd picked a set number of years instead, that's fixed period."},
 {t:"mc", q:"Which settlement option keeps the principal intact with the insurer and pays out only the earnings?", o:["Interest only","Fixed period","Lump sum","Straight life income"], why:"Interest only pays the interest; the principal is paid later. That interest is taxable."},
 {t:"mc", q:"The three factors used to calculate a life insurance premium are:", o:["Mortality, interest, and expense","Age, gender, and income","Mortality, dividends, and taxes","Interest, inflation, and commissions"], why:"Mortality and expense raise the premium. Expected interest earnings lower it."},
 {t:"mc", q:"A waiver of premium rider usually requires:", o:["Total disability lasting through a waiting period, often 6 months","Death of the insured","Proof of a terminal illness","A new medical exam every year"], why:"Waiver of premium kicks in after a waiting period of total disability, and premiums paid during that period are usually refunded."},
 {t:"mc", q:"A guaranteed insurability rider allows the insured to:", o:["Buy additional coverage at set ages or events without evidence of insurability","Convert term to whole life","Receive double the face for accidental death","Skip premiums when disabled"], why:"It guarantees the right to add coverage at certain option dates or life events, without proving insurability."}
 ]
},
{
 id:5, sec:"IV", title:"Contracts, applications, and delivery", sub:"Legal concepts, underwriting, premium receipts, and policy delivery",
 cards:[
 {h:"Elements of a valid contract", b:`
<p>An insurance policy is a legal contract. It needs four things:</p>
<ol class="steps">
<li><b>Offer and acceptance</b>: usually the applicant offers (by applying with the first premium); the insurer accepts by issuing the policy as applied for.</li>
<li><b>Consideration</b>: the applicant gives statements in the application and the first premium; the insurer gives its promise to pay.</li>
<li><b>Competent parties</b>: of legal age and sound mind. (NC lets minors 15 and up buy life insurance and annuities for themselves, G.S. 58-58-100.)</li>
<li><b>Legal purpose</b>: insurable interest and no intent to break the law.</li>
</ol>
<p><b>Mnemonic:</b> contracts need a "COLA": Consideration, Offer and acceptance, Legal purpose, Able (competent) parties.</p>`},
 {h:"What makes insurance contracts special", b:`
<ul class="defs">
<li><b>Unilateral</b>: only the insurer makes a legally enforceable promise. The owner doesn't have to keep paying.</li>
<li><b>Adhesion</b>: the insurer writes it; the buyer takes it or leaves it. So <b>ambiguities are read in favor of the insured</b>.</li>
<li><b>Aleatory</b>: the exchange is unequal and depends on chance. A $50 premium could trigger a $500,000 payout.</li>
<li><b>Conditional</b>: the insurer pays only if conditions are met (premiums paid, proof of death filed).</li>
<li><b>Indemnity</b>: restores a loss without profit. Life insurance is NOT indemnity; it's a <b>valued</b> contract that pays a set face amount.</li>
<li><b>Utmost good faith</b>: both sides must be honest.</li>
</ul>`},
 {h:"Insurable interest, misrepresentation, concealment", b:`
<ul class="defs">
<li><b>Insurable interest</b>: the owner would suffer a real loss if the insured died. You have it in your own life, close family (blood or marriage), and business relationships (employer and key employee, business partners, creditor and debtor). It must exist <b>when the policy is issued</b>, not at death.</li>
<li><b>Representations</b>: application answers are statements believed true to the best of the applicant's knowledge. <b>Warranties</b> are guaranteed true. Life applications are treated as representations.</li>
<li><b>Misrepresentation</b>: a false statement. If <b>material</b> (it would have changed the insurer's decision), the insurer can void the policy during the contestable period.</li>
<li><b>Concealment</b>: deliberately hiding a material fact.</li>
<li><b>Impersonation</b> (false pretenses): someone else takes the medical exam posing as the applicant. That's fraud; there was never a valid contract with the real person.</li>
</ul>`},
 {h:"The application and underwriting", b:`
<ul class="defs">
<li><b>Part 1</b>: general info (name, age, occupation, coverage wanted, beneficiary). <b>Part 2</b>: medical history. Plus the <b>agent's report</b>, where the agent adds what they saw (field underwriting).</li>
<li><b>Signatures</b>: the proposed insured, the owner if different, and the agent. If the insured is a minor, a parent or guardian signs. (In NC, 15 and up can contract for themselves.)</li>
<li><b>Errors</b>: cross out, write the correct answer, and have the applicant initial it. No white-out. Never fill in a blank answer yourself.</li>
<li>Sources the underwriter uses: the application, agent's report, medical exam, <b>attending physician's statement (APS)</b>, <b>MIB</b> (Medical Information Bureau, a shared database of medical info insurers report), and consumer or investigative reports under the federal <b>Fair Credit Reporting Act</b>.</li>
<li>Outcomes: <b>preferred</b>, <b>standard</b>, <b>substandard</b> (rated: higher premium or exclusions), or <b>declined</b>.</li>
</ul>`},
 {h:"Initial premium receipts", b:`
<p>If the applicant pays the first premium with the application, the agent gives a receipt.</p>
<ul class="defs">
<li><b>Conditional receipt</b> (the common one): coverage starts on the date of the application (or medical exam, if later), <b>but only if</b> the applicant turns out to be insurable as applied for.</li>
<li><b>Binding receipt</b>: temporary coverage starts right away, for a limited time, even if the applicant is later declined. Coverage ends when the insurer declines.</li>
</ul>
<p class="example">Rosa applies with premium, gets a conditional receipt, takes the exam, then dies in a car crash before the policy is issued. If underwriting shows she qualified as applied for, the insurer pays.</p>
<p class="aside">If no premium is paid with the application, there's no coverage until the policy is delivered and the first premium is collected.</p>`},
 {h:"Policy delivery", b:`
<ul class="defs">
<li><b>Issued as applied for</b>: the contract is accepted. The agent delivers it and explains it.</li>
<li><b>Modified or amended</b> (rated, or with an exclusion): that's a <b>counteroffer</b>. The applicant must accept it, usually by signing an acceptance at delivery, and pay any extra premium.</li>
<li><b>Prepaid</b> (premium paid with the application): the agent delivers and reviews the policy.</li>
<li><b>Not prepaid</b>: at delivery the agent must collect the first premium <b>and</b> a signed <b>statement of continued good health</b>, confirming the insured's health hasn't changed since the application.</li>
<li><b>Constructive delivery</b>: mailing the policy to the agent or owner, without conditions, counts as delivery. The insurer has given up control.</li>
<li>The free look period starts at delivery, so agents should deliver promptly and get a signed delivery receipt.</li>
</ul>`}
 ],
 cheat:[
 "Valid contract: offer and acceptance, consideration, competent parties, legal purpose.",
 "Consideration: applicant = application + first premium. Insurer = promise to pay.",
 "Unilateral (only insurer promises), adhesion (ambiguity favors insured), aleatory (unequal exchange), conditional (conditions must be met).",
 "Life insurance is a valued contract, not indemnity.",
 "Insurable interest needed at issue, not at death. Self, family, business, creditor.",
 "Application answers = representations. Material misrepresentation can void during the contestable period.",
 "Corrections on an application: applicant initials. No white-out.",
 "Underwriting sources: application, agent's report, medical exam, APS, MIB, consumer reports (FCRA).",
 "Conditional receipt: coverage from application/exam date IF insurable as applied for. Binding: immediate temporary coverage.",
 "Modified policy at delivery = counteroffer; applicant must accept.",
 "Not prepaid at delivery: collect premium + statement of continued good health.",
 "Constructive delivery: mailing to the agent or owner without conditions."
 ],
 quiz:[
 {t:"mc", q:"Which is NOT one of the elements of a valid insurance contract?", o:["Insurable interest at death","Offer and acceptance","Consideration","Competent parties"], why:"The four elements are offer and acceptance, consideration, competent parties, and legal purpose. Insurable interest is needed at issue, not at death."},
 {t:"mc", q:"The applicant's consideration in a life insurance contract is:", o:["The statements in the application and payment of the first premium","The promise to pay all future premiums","The agent's commission","The beneficiary designation"], why:"The applicant gives application statements plus the initial premium. The insurer gives its promise to pay."},
 {t:"mc", q:"Because the insurer writes the contract and the buyer can't negotiate the terms, courts read ambiguities in favor of the insured. This is because the contract is one of:", o:["Adhesion","Indemnity","Aleatory","Utmost good faith"], why:"Contracts of adhesion are take-it-or-leave-it, so unclear terms are interpreted against the drafter (the insurer)."},
 {t:"mc", q:"A life insurance contract is aleatory because:", o:["The amounts exchanged are unequal and depend on an uncertain event","Only the insurer makes promises","It must be in writing","It reimburses actual losses"], why:"A small premium can lead to a large payout, depending on chance. That's aleatory."},
 {t:"mc", q:"A life insurance contract is unilateral because:", o:["Only the insurer makes a legally enforceable promise","Both parties must perform","It can be changed by one side","It's issued to one person"], why:"The owner can stop paying anytime. The insurer is the only party legally bound to perform."},
 {t:"mc", tag:"Scenario", q:"Which of these people does NOT have an insurable interest in Dana's life?", o:["Dana's neighbor, who just likes her","Dana herself","Dana's husband","Dana's business partner"], why:"Insurable interest requires a real financial or close family stake. A friendly neighbor doesn't have one."},
 {t:"mc", q:"Insurable interest in life insurance must exist:", o:["When the policy is issued","At the time of death","Both at issue and at death","Only for group policies"], why:"It must exist at issue. If the relationship ends later (divorce, for example), the policy stays valid."},
 {t:"mc", q:"Statements on a life application are generally treated as:", o:["Representations: true to the best of the applicant's knowledge","Warranties: guaranteed to be true","Conditions precedent","Legally irrelevant"], why:"Life application answers are representations. Only material misrepresentations allow the insurer to void the policy."},
 {t:"mc", tag:"Scenario", q:"An applicant answered a question wrong. What should the agent do?", o:["Correct it and have the applicant initial the change","Use white-out and rewrite it","Fix it later without telling the applicant","Start a new application without telling the insurer"], why:"Corrections should be initialed by the applicant. Never white-out or alter answers yourself."},
 {t:"mc", q:"Under a conditional receipt, coverage takes effect:", o:["On the application (or exam) date, if the applicant is found insurable as applied for","Immediately, no matter what","Only when the policy is delivered","After the free look period"], why:"A conditional receipt backdates coverage to the application or exam date, but only if the applicant qualifies as applied for."},
 {t:"mc", tag:"Scenario", q:"The insurer issues Jay's policy with a higher premium than he applied for because of his blood pressure. What is this?", o:["A counteroffer that Jay must accept","Final acceptance; Jay must pay","A rejection","A binding receipt"], why:"A policy issued other than as applied for is a counteroffer. Jay accepts it by signing and paying the extra premium at delivery."},
 {t:"mc", q:"When delivering a policy for which no premium was paid with the application, the agent should collect the premium and:", o:["A signed statement of continued good health","A new application","An attending physician's statement","A beneficiary consent form"], why:"The statement confirms the insured's health hasn't changed since applying, because there was no coverage until now."},
 {t:"mc", q:"The MIB (Medical Information Bureau) is used by underwriters to:", o:["Check medical information that member insurers have reported on prior applications","Approve applications automatically","Pay medical claims","Set premium rates by law"], why:"MIB is a shared database that helps insurers catch omissions or fraud in applications."}
 ]
},
{
 id:6, sec:"IV", title:"Group, retirement, business, and taxes", sub:"Group life, retirement plans, buy-sell and key person, Social Security, federal tax, cost comparison, variable products",
 cards:[
 {h:"Group life insurance", b:`
<ul class="defs">
<li>One <b>master policy</b> is issued to the sponsor (usually an employer). Each member gets a <b>certificate</b> describing their coverage. The employer is the policyholder; members aren't parties to the contract.</li>
<li>Usually <b>annually renewable group term</b>. Survivorship coverage can also be written on a group basis.</li>
<li><b>Group underwriting</b>: the insurer underwrites the <b>group as a whole</b> (size, industry, turnover, age mix), not each person. Usually no medical exam. The group must exist for a reason other than buying insurance.</li>
<li><b>Contributory</b> (employees pay part) vs <b>noncontributory</b> (employer pays all; typically all eligible employees must be covered).</li>
<li><b>Conversion</b>: when a member leaves the group, they can convert to an individual permanent policy <b>without evidence of insurability</b> if they apply and pay within <b>31 days</b>. If they die during those 31 days, the group benefit is paid. (NC: G.S. 58-58-140.)</li>
<li><b>Credit life</b>: covers a borrower; the <b>creditor</b> is the beneficiary; coverage can't exceed the debt. Usually decreasing term, often group. <b>Mortgage life</b>: decreasing term matched to a mortgage.</li>
</ul>`},
 {h:"Tax-qualified retirement plans", b:`
<table class="t"><tr><th>Plan</th><th>Who it's for</th></tr>
<tr><td><b>Traditional IRA</b></td><td>Anyone with earned income. Contributions may be deductible; growth tax-deferred; withdrawals taxed.</td></tr>
<tr><td><b>Roth IRA</b></td><td>After-tax contributions; qualified withdrawals (age 59½ and 5 years) are tax-free.</td></tr>
<tr><td><b>TSA / 403(b)</b></td><td>Employees of public schools and 501(c)(3) nonprofits (hospitals, churches, charities).</td></tr>
<tr><td><b>Keogh (HR-10)</b></td><td>Self-employed people and unincorporated businesses, and their eligible employees.</td></tr>
<tr><td><b>SEP</b></td><td>Small employers or self-employed; the <b>employer</b> contributes to each employee's own IRA.</td></tr>
<tr><td><b>401(k)</b></td><td>Employees defer part of their salary before tax; employer may match.</td></tr></table>
<p>Common rules: withdrawals before <b>59½</b> usually add a <b>10% penalty</b> on top of income tax; required minimum distributions start at age 73 for most people today (Roth IRAs have none for the owner). Qualified plans can't favor highly paid employees.</p>`},
 {h:"Business uses of life insurance", b:`
<ul class="defs">
<li><b>Buy-sell agreement</b>: a contract where a deceased owner's share is bought by the remaining owners or the business, funded by life insurance.
 <ul class="defs" style="margin-top:6px"><li><b>Cross-purchase</b>: each owner buys a policy on each other owner and is its beneficiary. 3 owners = 6 policies (n × (n-1)).</li>
 <li><b>Entity (stock redemption)</b>: the <b>business</b> owns one policy per owner, pays the premiums, is the beneficiary, and buys back the shares.</li></ul></li>
<li><b>Key person insurance</b>: the business insures an employee whose death would hurt profits. The business is owner, payor, and beneficiary. Premiums aren't tax-deductible; the death benefit is generally received income-tax-free.</li>
</ul>
<p><b>Mnemonic:</b> Cross = owners cross-insure each other. Entity = the company (the entity) holds the policies.</p>`},
 {h:"Social Security survivor benefits", b:`
<ul class="defs">
<li><b>Fully insured</b>: 40 credits (about 10 years of work). Qualifies for retirement benefits and full survivor benefits.</li>
<li><b>Currently insured</b>: at least 6 credits in the last 13 quarters. Gives limited survivor benefits (to children and a spouse caring for them) and the lump-sum death benefit.</li>
<li><b>Lump-sum death benefit</b>: a one-time <b>$255</b>.</li>
<li>Survivor benefits go to: unmarried children under 18 (19 if still in high school); a surviving spouse caring for a child under 16; a surviving spouse at 60 or older (50 if disabled).</li>
<li><b>Blackout period</b>: from when the youngest child turns 16 until the surviving spouse turns 60, the spouse gets no benefit. Life insurance often fills that gap.</li>
<li>Full retirement age is 67 for anyone born in 1960 or later. Reduced benefits start as early as 62.</li>
</ul>`},
 {h:"Federal taxes on life insurance and annuities", b:`
<ul class="defs">
<li><b>Premiums</b> for personal life insurance: not deductible.</li>
<li><b>Death benefit</b> paid in a lump sum: generally <b>income-tax-free</b> to the beneficiary. Interest earned in installment settlement options is taxable.</li>
<li><b>Cash value growth</b>: tax-deferred.</li>
<li><b>Surrender</b>: the gain (cash value minus premiums paid, your "cost basis") is taxed as <b>ordinary income</b>.</li>
<li><b>Policy loans</b>: not taxable while the policy stays in force (unless it's a MEC).</li>
<li><b>Dividends</b>: not taxable (return of premium) until they exceed premiums paid.</li>
<li><b>MEC (modified endowment contract)</b>: a policy funded too fast to pass the IRS <b>7-pay test</b>. Loans and withdrawals are taxed gain-first, plus a 10% penalty before 59½. The death benefit stays tax-free.</li>
<li><b>Section 1035 exchange</b>: tax-free swap of life to life, life to annuity, or annuity to annuity. Not annuity to life.</li>
<li><b>Group term life</b>: employer-paid coverage up to <b>$50,000</b> isn't taxable to the employee; the cost of coverage above that is.</li>
<li><b>Annuities</b>: deferred growth; withdrawals are taxed interest-first; annuity payments are partly tax-free return of principal (the exclusion ratio).</li>
</ul>`},
 {h:"Cost comparison and variable products", b:`
<ul class="defs">
<li><b>Traditional net cost method</b>: total premiums minus dividends minus cash value. Simple, but it <b>ignores the time value of money</b>, so it can make a policy look free.</li>
<li><b>Interest-adjusted net cost method</b>: factors in interest (time value of money). More accurate. Two indexes: the <b>surrender cost index</b> (if you surrender) and the <b>net payment cost index</b> (if you keep it).</li>
<li>NC's Life Insurance Disclosure Act bans comparing policy costs with a method that ignores the time value of money (G.S. 58-60-20(e)).</li>
<li><b>Variable life, VUL, and variable annuities</b> are securities. Values depend on separate account investments (mutual-fund-like sub-accounts). The seller needs FINRA registration plus a state life license with variable authority, and the buyer gets a prospectus.</li>
</ul>`}
 ],
 cheat:[
 "Group life: master policy to the employer; certificates to members; underwrite the group, not individuals.",
 "Group conversion: 31 days, no evidence of insurability, individual permanent policy. Death in those 31 days is covered.",
 "Credit life: creditor is beneficiary, can't exceed the debt.",
 "IRA (anyone with earned income), Roth (after-tax, tax-free later), 403(b)/TSA (schools, 501(c)(3)), Keogh (self-employed), SEP (employer funds employee IRAs), 401(k) (salary deferral).",
 "Early withdrawal before 59½: income tax + 10% penalty, in most cases.",
 "Cross-purchase: owners insure each other (n × (n-1) policies). Entity: business owns one policy per owner.",
 "Key person: business owns, pays, and is beneficiary; premiums not deductible; benefit generally tax-free.",
 "Social Security: fully insured = 40 credits. Currently insured = 6 of last 13 quarters. Lump-sum death benefit $255. Blackout = youngest child 16 until spouse 60.",
 "Personal premiums not deductible. Lump-sum death benefit income-tax-free. Surrender gain = ordinary income.",
 "MEC fails the 7-pay test: loans/withdrawals taxed gain-first + 10% before 59½.",
 "1035: life→life, life→annuity, annuity→annuity. Never annuity→life.",
 "Employer-paid group term: first $50,000 tax-free to employee.",
 "Traditional net cost ignores time value of money. Interest-adjusted (surrender cost, net payment cost) doesn't."
 ],
 quiz:[
 {t:"mc", q:"In group life insurance, the document an individual employee receives is the:", o:["Certificate of insurance","Master policy","Policy summary","Buyer's Guide"], why:"The employer holds the master policy. Each covered member gets a certificate."},
 {t:"mc", q:"Group life underwriting usually focuses on:", o:["The group as a whole","Each member's medical exam","Each member's credit history","The employer's profits only"], why:"Group insurance underwrites the group's characteristics, so individual medical exams usually aren't needed."},
 {t:"mc", tag:"Scenario", q:"Carla leaves her job. Under NC law, how long does she have to convert her group life coverage to an individual policy without evidence of insurability?", o:["31 days","10 days","60 days","6 months"], why:"G.S. 58-58-140 gives 31 days to apply and pay the first premium, no evidence of insurability needed."},
 {t:"mc", q:"In credit life insurance, the beneficiary is:", o:["The creditor","The debtor's spouse","The debtor's estate","The insurer"], why:"Credit life pays off the debt, so the lender is the beneficiary. Coverage can't exceed the debt."},
 {t:"mc", q:"A tax-sheltered annuity (403(b)) is available to employees of:", o:["Public schools and 501(c)(3) nonprofit organizations","Any for-profit corporation","Only the federal government","Only self-employed individuals"], why:"TSAs are for public school systems and tax-exempt 501(c)(3) organizations."},
 {t:"mc", q:"A Keogh (HR-10) plan is designed for:", o:["Self-employed individuals and their employees","Public school teachers","Large corporations only","Minors"], why:"Keogh plans are qualified plans for the self-employed and unincorporated businesses."},
 {t:"mc", tag:"Scenario", q:"Three partners set up a cross-purchase buy-sell agreement. How many policies are needed?", o:["6","3","1","9"], why:"Cross-purchase needs n × (n-1) policies: 3 × 2 = 6. An entity plan would need only 3."},
 {t:"mc", q:"In an entity (stock redemption) buy-sell plan, who owns the policies and is the beneficiary?", o:["The business","Each surviving owner","The deceased owner's family","A trust for the employees"], why:"In an entity plan the business owns a policy on each owner, pays premiums, receives the proceeds, and buys the shares."},
 {t:"mc", q:"For key person insurance, which statement is true?", o:["The business is the owner and beneficiary, and premiums aren't tax-deductible","The key employee is the beneficiary","Premiums are tax-deductible to the business","The death benefit is taxable income to the business"], why:"The business owns, pays, and collects. Premiums aren't deductible, and the death benefit is generally received income-tax-free."},
 {t:"mc", q:"The Social Security lump-sum death benefit is:", o:["$255","$2,550","$1,000","Equal to one month's benefit"], why:"It's a one-time $255 payment to an eligible spouse or child."},
 {t:"mc", q:"The Social Security 'blackout period' is the time:", o:["From when the youngest child turns 16 until the surviving spouse turns 60","Before a worker earns 40 credits","Between age 62 and full retirement age","During the first year after death"], why:"Parent benefits stop when the youngest child turns 16. Widow(er) benefits don't start until 60. Life insurance can cover the gap."},
 {t:"mc", q:"A beneficiary receives a $500,000 death benefit in a lump sum. For federal income tax, it is generally:", o:["Not taxable","Fully taxable as ordinary income","Taxable as a capital gain","Taxable above $50,000"], why:"Life insurance death benefits paid in a lump sum are generally income-tax-free."},
 {t:"mc", tag:"Scenario", q:"Ray paid $40,000 in premiums and surrenders his whole life policy for $55,000. How much is taxable?", o:["$15,000 as ordinary income","$55,000","$0","$15,000 as a capital gain"], why:"Gain over the cost basis (premiums paid) is taxed as ordinary income: $55,000 - $40,000 = $15,000."},
 {t:"mc", q:"A policy becomes a modified endowment contract (MEC) when it:", o:["Fails the IRS 7-pay test","Has a loan outstanding","Is converted from term","Pays dividends"], why:"Funding a policy faster than the 7-pay test allows makes it a MEC. Loans and withdrawals then get taxed gain-first, with a 10% penalty before 59½."},
 {t:"mc", q:"Which cost comparison method accounts for the time value of money?", o:["Interest-adjusted net cost","Traditional net cost","Premium-only method","Face-value method"], why:"Interest-adjusted methods (surrender cost index and net payment cost index) factor in interest. The traditional method ignores it."}
 ]
},
{
 id:7, sec:"V", title:"NC law, part 1: Commissioner and licensing", sub:"Who regulates, who needs a license, appointments, penalties, and fraud",
 cards:[
 {h:"Basic definitions (G.S. 58-1)", b:`
<ul class="defs">
<li><b>Contract of insurance</b> (G.S. 58-1-10): an agreement where the insurer is bound to pay money (or do something of value) to the insured as indemnity or reimbursement for loss of something in which the other party has an interest.</li>
<li><b>Domestic</b> insurer: organized under <b>NC</b> law. <b>Foreign</b>: organized in <b>another U.S. state</b>. <b>Alien</b>: organized <b>outside the U.S.</b> (G.S. 58-1-5).</li>
<li>"Insurer" or "company" includes corporations, associations, societies, and reciprocal exchanges. It does not include the State or local governments.</li>
</ul>
<p class="example">An insurer incorporated in Iowa is a foreign insurer in North Carolina. One incorporated in Bermuda is alien.</p>`},
 {h:"The Commissioner of Insurance (G.S. 58-2)", b:`
<ul class="defs">
<li><b>Elected</b> by NC voters for a <b>4-year term</b>. If the office becomes vacant, the <b>Governor</b> fills it for the rest of the term (58-2-5).</li>
<li>Enforces the insurance laws and adopts rules to carry them out (58-2-40).</li>
<li>Conducts examinations, hearings, and investigations, and can have someone <b>arrested with a warrant</b> when there's evidence of a criminal violation (58-2-50).</li>
<li>Can seek a court restraining order. A licensee's <b>criminal conviction</b> under the insurance laws <b>automatically suspends</b> the license until the Commissioner reinstates it. Conviction includes a guilty or no-contest plea (58-2-60).</li>
<li>A licensee under investigation may, with the Commissioner's approval, <b>surrender</b> the license for a set time (58-2-65).</li>
<li>Can order a <b>civil penalty of $100 to $1,000</b> per violation (each day counts as a separate violation), and/or ask the court for <b>restitution</b>, in addition to or instead of suspension or revocation (58-2-70).</li>
</ul>`},
 {h:"Records, reporting, and fraud", b:`
<ul class="defs">
<li>Insurers and producers must keep full records of business done (policy number, date, term, amount, premium, to whom) and open them to the Commissioner on demand (58-2-185, 58-2-195). Refusing to show books, or lying about them, is a <b>Class 1 misdemeanor</b> (58-2-200).</li>
<li>Insurers and agents keep a <b>log of written complaints</b> for at least 5 years after final disposition (11 NCAC 19 .0103).</li>
<li><b>Insurance fraud</b> (false statement to get or deny a claim benefit): <b>Class H felony</b> under $100,000; <b>Class C felony</b> at $100,000 or more (58-2-161).</li>
<li><b>Embezzlement by a producer</b> (misusing premiums or other money received as a producer): felony, Class H under $100,000, Class C at $100,000 or more (58-2-162).</li>
<li>Anyone licensed who knows or suspects fraud or embezzlement must <b>report it to the Commissioner</b>. A report made without actual malice is privileged: no liability. Willful failure can cost you your license (58-2-163).</li>
<li>Willfully false statements in a financial statement required by the insurance laws: <b>Class I felony</b> (58-2-180).</li>
<li><b>Obtaining property by false pretenses</b> (G.S. 14-100): felony; Class C at $100,000 or more, otherwise Class H.</li>
</ul>`},
 {h:"Getting and keeping a license (G.S. 58-33)", b:`
<ul class="defs">
<li>No one may act as or claim to be a producer without a license, or sell a line they aren't licensed for (58-33-26).</li>
<li>NC lines include <b>Life</b> (which covers death, accidental death and dismemberment, and disability income in life policies) and a separate <b>Variable life and variable annuity</b> line.</li>
<li>Resident applicants must be <b>at least 18</b>, pass the exam, pay fees, and not have committed acts that are grounds for denial (58-33-31). Since <b>October 1, 2025</b>, NC can't require a specific prelicensing course (58-33-30(d)). The exam is still required.</li>
<li>A business entity needs its own producer license and must designate a licensed individual responsible for compliance.</li>
<li><b>Appointment</b>: a licensed producer can't act for an insurer until appointed. The insurer files the appointment within <b>15 days after the first application</b> is submitted (58-33-40).</li>
<li>When an insurer terminates a producer, it notifies the Commissioner within <b>30 days</b>, then the producer within <b>15 days</b> after that (58-33-56).</li>
<li><b>Temporary license</b>: up to <b>180 days</b>, no exam, for example to the spouse or estate of a producer who died or became disabled, or the designee of a producer entering military service (58-33-66).</li>
</ul>`},
 {h:"Reporting duties and deadlines", b:`
<table class="t"><tr><th>Event</th><th>Deadline</th><th>Source</th></tr>
<tr><td>Change of residential or email address</td><td>10 business days ($50 fee if late)</td><td>58-2-69(b)</td></tr>
<tr><td>Criminal conviction (other than a motor vehicle infraction)</td><td>10 days</td><td>58-2-69(c)</td></tr>
<tr><td>Administrative action in another state (or by FINRA)</td><td>30 days after final disposition</td><td>58-33-32(k)</td></tr>
<tr><td>Bankruptcy, insolvency, receivership</td><td>3 business days</td><td>58-33-46(c)</td></tr>
<tr><td>Doing business under an assumed name</td><td>Before you use it</td><td>58-33-83</td></tr></table>
<p class="aside">Mnemonic: "Move or convicted: 10. Out-of-state action: 30. Broke: 3."</p>`},
 {h:"Grounds for discipline and producer liability", b:`
<p>The Commissioner can put on probation, suspend, revoke, or refuse to renew a license for (58-33-46), among others:</p>
<ul class="defs">
<li>False or incomplete information on the license application, or getting a license by fraud.</li>
<li>Violating any insurance law or rule, or a FINRA rule.</li>
<li>Misappropriating or converting money received in the business.</li>
<li>Intentionally misrepresenting a policy's terms.</li>
<li>A felony, or a misdemeanor involving dishonesty or breach of trust.</li>
<li>Fraudulent, coercive, or dishonest practices, or incompetence.</li>
<li>Forging a name on an application. Cheating on the exam. Selling for an <b>unauthorized insurer</b>, even unknowingly.</li>
</ul>
<p>Also: commissions can only go to properly licensed people, though renewals can go to someone who was licensed at the time of sale (58-33-82). A producer who sells for an unauthorized insurer is <b>personally liable</b> for unpaid claims (58-33-95). For receiving premiums, the producer is the <b>insurer's</b> agent (58-33-100), and the soliciting agent represents the company, not the insured (58-58-30). Knowingly false statements on an application: <b>Class 1 misdemeanor</b> (58-33-105).</p>`}
 ],
 cheat:[
 "Domestic = NC. Foreign = other U.S. state. Alien = outside the U.S.",
 "Commissioner: elected, 4-year term; Governor fills vacancies.",
 "Commissioner can examine, hold hearings, investigate, and arrest with a warrant.",
 "Conviction under the insurance laws automatically suspends the license.",
 "Civil penalty: $100 to $1,000 per violation (each day separate), plus possible restitution.",
 "Fraud and producer embezzlement: Class H felony under $100,000; Class C at $100,000+.",
 "Must report suspected fraud. Good-faith reports (no actual malice) are immune.",
 "Refusing to show books to the Commissioner: Class 1 misdemeanor. False application statements: Class 1 misdemeanor.",
 "License: 18+, exam required; NC can't require a prelicense course since 10/1/2025.",
 "Appointment filed within 15 days of the first application. Termination: insurer tells Commissioner within 30 days, producer within 15 days after.",
 "Temporary license: up to 180 days, no exam.",
 "Address change: 10 business days. Conviction: 10 days. Other-state action: 30 days. Bankruptcy: 3 business days. Assumed name: before use.",
 "Selling for an unauthorized insurer = personally liable + license action.",
 "Producer collecting premium = agent of the insurer."
 ],
 quiz:[
 {t:"mc", q:"An insurer organized under the laws of South Carolina and doing business in North Carolina is, in NC, a(n):", o:["Foreign insurer","Domestic insurer","Alien insurer","Unauthorized insurer"], why:"Foreign means organized in another U.S. state. Domestic is NC; alien is outside the U.S."},
 {t:"mc", q:"How does someone become the NC Commissioner of Insurance?", o:["Elected by the voters for a 4-year term","Appointed by the Governor for 6 years","Appointed by the General Assembly","Chosen by the NAIC"], why:"G.S. 58-2-5: the Commissioner is elected for four years. The Governor only fills a vacancy."},
 {t:"mc", q:"If a licensee is convicted of a criminal violation of NC's insurance laws, what happens to the license?", o:["It's automatically suspended until the Commissioner reinstates it","Nothing until a hearing is held","It's automatically renewed","It's converted to a temporary license"], why:"G.S. 58-2-60(b): conviction (including a guilty or no-contest plea) automatically suspends the license."},
 {t:"mc", q:"Under G.S. 58-2-70, the Commissioner's civil penalty per violation ranges from:", o:["$100 to $1,000","$1,000 to $5,000","$50 to $500","$500 to $10,000"], why:"It's $100 to $1,000 per violation, and each day of a violation counts separately. Restitution can also be ordered by the court."},
 {t:"mc", tag:"Scenario", q:"A producer keeps $40,000 in client premiums for personal use. Under NC law this is:", o:["Embezzlement, a Class H felony","A Class 3 misdemeanor","Only a civil matter","Rebating"], why:"G.S. 58-2-162: embezzlement by a producer is a felony, Class H under $100,000 and Class C at $100,000 or more."},
 {t:"mc", tag:"Scenario", q:"An agent suspects a client faked a death claim. What does NC law require?", o:["Report it to the Commissioner; a report without actual malice is protected","Stay silent to protect the client's privacy","Report it only if the insurer asks","Confront the client and keep it confidential"], why:"G.S. 58-2-163 makes reporting a duty and protects good-faith reports. Willful failure can cost the license."},
 {t:"mc", q:"What's the minimum age to get a resident NC producer license?", o:["18","16","19","21"], why:"G.S. 58-33-31(a)(1) requires the applicant to be at least 18."},
 {t:"mc", q:"As of October 1, 2025, what does NC require before taking the Life Agent exam?", o:["No specific prelicensing course; the exam itself is still required","A 40-hour prelicensing course","A college degree","An insurer appointment"], why:"G.S. 58-33-30(d) now bars the Commissioner from requiring any specific course. Passing the state exam is still required."},
 {t:"mc", q:"An insurer must file a producer's appointment within how long after the first application is submitted?", o:["15 days","30 days","5 days","90 days"], why:"G.S. 58-33-40(b): the notice of appointment is due within 15 days after the first insurance application is submitted."},
 {t:"mc", tag:"Scenario", q:"Paula, a licensed producer, moves to a new house. When must she notify the Commissioner?", o:["Within 10 business days","Within 30 days","At her next CE deadline","Only when her license renews"], why:"G.S. 58-2-69(b): changes of residential or email address are due within 10 business days. Late notice costs a $50 fee."},
 {t:"mc", q:"A licensee convicted of a crime (other than a motor vehicle infraction) must notify the Commissioner in writing within:", o:["10 days","30 days","3 business days","60 days"], why:"G.S. 58-2-69(c) sets 10 days from the conviction date."},
 {t:"mc", q:"A producer subject to an administrative action in another state must report it to the NC Commissioner within:", o:["30 days after final disposition","10 days after the action starts","1 year","Only at license renewal"], why:"G.S. 58-33-32(k): 30 days after final disposition, with a copy of the order. FINRA actions count."},
 {t:"mc", q:"A temporary producer license can be issued without an exam for up to:", o:["180 days","30 days","1 year","2 years"], why:"G.S. 58-33-66 allows up to 180 days (longer for good cause), for example to the family of a producer who died or became disabled."},
 {t:"mc", q:"For the purpose of receiving premiums, a producer who negotiates a policy is considered the agent of:", o:["The insurer","The insured","The Commissioner","The beneficiary"], why:"G.S. 58-33-100: the producer is the company's agent for receiving premiums, whatever the policy says."}
 ]
},
{
 id:8, sec:"V", title:"NC law, part 2: Sales conduct and consumer protection", sub:"Unfair trade practices, privacy, disclosure, replacement, ethics, CE, guaranty association, fraternals, viaticals",
 cards:[
 {h:"Unfair trade practices (G.S. 58-63-15)", b:`
<ul class="defs">
<li><b>Misrepresentation and false advertising of policies</b>: misstating terms, benefits, or dividends, or misleading someone to get them to lapse, forfeit, or surrender a policy.</li>
<li><b>False advertising generally</b>: untrue, deceptive, or misleading statements about insurance in any medium.</li>
<li><b>Defamation</b>: false or maliciously critical statements about an insurer's financial condition meant to hurt it.</li>
<li><b>Boycott, coercion, and intimidation</b>: concerted action that leads to unreasonable restraint of trade.</li>
<li><b>False financial statements</b>: filing or circulating false statements of an insurer's financial condition.</li>
<li><b>Unfair discrimination</b>: treating people of the same class and life expectancy differently in rates or benefits.</li>
<li><b>Rebating</b>: giving any inducement not stated in the policy (part of the premium back, a special favor, valuable consideration). Also banned by G.S. 58-33-85; the insured can't knowingly accept one either.</li>
<li><b>Unfair claim settlement practices</b>, when done often enough to be a general business practice.</li>
</ul>
<p><b>Twisting</b> (G.S. 58-3-115): a statement that willfully misrepresents, or makes an <b>incomplete comparison</b> of, policies to get someone to drop, surrender, exchange, or convert a policy.</p>
<p>The Commissioner can hold hearings (with at least 10 days' notice) and issue cease and desist orders. Willfully violating a final order: <b>$1,000 to $5,000</b> per violation (58-63-50).</p>`},
 {h:"What's allowed: gifts, fees, card payments", b:`
<ul class="defs">
<li>Under the rule in effect through 2026 (G.S. 58-63-16), producers may offer products or services tied to marketing, buying, or keeping a policy worth up to <b>$250 per person per year</b>, plus services tied to servicing the policy or risk control. From <b>January 1, 2027</b>, that moves into G.S. 58-63-15(8): noncash gifts up to <b>$250 per policy term</b>, not unfairly discriminatory, and not conditioned on buying.</li>
<li>Charging an applicant a fee on top of the premium for processing or services needs the applicant's <b>written consent before</b> the services (58-33-85(b)).</li>
<li>Insurers and producers can accept card payments and charge a <b>convenience fee of up to 4%</b> (58-3-145).</li>
<li>Insurers can't refuse coverage, limit it, or charge more <b>solely</b> because someone is blind or deaf (58-3-25).</li>
<li>No <b>tie-in sales</b>: a life policy can't be bundled with stock, securities, or "advisory board" profit contracts (58-58-20).</li>
</ul>`},
 {h:"Life insurance solicitation and disclosure (G.S. 58-60)", b:`
<ul class="defs">
<li>The insurer must give prospective buyers a <b>Buyer's Guide</b> and a <b>Policy Summary</b> before accepting the initial premium. Exception: if the policy (or summary) has an unconditional refund right of <b>at least 10 days</b>, they can be delivered with or before the policy (58-60-15).</li>
<li>Before a sales presentation, the producer must say they're a <b>life insurance agent</b> and give the <b>full name of the insurer</b> (58-60-20(b)).</li>
<li>Don't call yourself a financial planner, investment advisor, or similar in a way that implies you're paid apart from sales, unless that's true.</li>
<li>Any mention of dividends must say they're <b>not guaranteed</b>. Guaranteed and nonguaranteed values can't be shown as a single sum.</li>
<li>No cost comparison that ignores the <b>time value of money</b>.</li>
<li>Insurers keep copies of solicitation documents for 3 years after last use. Failing to deliver a Buyer's Guide or Policy Summary counts as misrepresentation (58-60-30).</li>
<li>The Act doesn't apply to annuities, credit life, group life, or variable life (with exceptions).</li>
</ul>`},
 {h:"Replacement (11 NCAC 12 .0600)", b:`
<p><b>Replacement</b> = buying a new policy or annuity when the old one will be lapsed, surrendered, converted to reduced paid-up or extended term, reduced in value, reissued with less cash value, or used to finance the new one (.0602).</p>
<p><b>Producer duties</b> (.0605):</p>
<ul class="defs">
<li>Submit a statement, signed by applicant and producer, on whether the applicant has existing coverage. If "no," the producer's replacement duties end.</li>
<li>If "yes": present and read the <b>replacement notice</b> no later than when taking the application, have both sign it, and leave a copy.</li>
<li>Leave copies of all sales material used, and send the insurer copies of the forms and any illustrations.</li>
</ul>
<p><b>Replacing insurer duties</b> (.0612): notify the existing insurer within <b>5 business days</b>; keep replacement notices for <b>5 years</b>; give the owner a <b>30-day right to return</b> the new policy for a full refund.</p>`},
 {h:"Privacy (Insurance Information and Privacy Protection Act, G.S. 58-39)", b:`
<ul class="defs">
<li><b>Notice of information practices</b>: given to applicants at policy delivery if info comes only from the applicant or public records; otherwise when collection from others starts.</li>
<li><b>Pretext interviews</b> (pretending to be someone else, or hiding the real purpose) are banned, except in some claim investigations where fraud is suspected.</li>
<li>Marketing or research questions must be clearly identified as such.</li>
<li><b>Investigative consumer reports</b>: the person must be told they can ask to be interviewed and can get a copy.</li>
<li><b>Access</b>: respond to a written request for recorded personal info within <b>30 business days</b>. <b>Corrections</b>: also <b>30 business days</b> to correct or explain a refusal.</li>
<li><b>Adverse underwriting decision</b> (decline, rating, etc.): give written reasons, or tell the person they can ask in writing within <b>90 business days</b>.</li>
<li>Disclosures generally need the person's written authorization. A third-party authorization must be dated, signed, and no more than 1 year old.</li>
</ul>`},
 {h:"Ethics, CE, guaranty, fraternals, viaticals", b:`
<ul class="defs">
<li><b>Ethical standards</b> (11 NCAC 04 .0423): when doing business with the public, identify yourself and your occupation. When asked, give your <b>National Producer Number</b> and the Department's website and phone number so they can check your license.</li>
<li><b>CE</b> (11 NCAC 06A .0802): <b>24 hours</b> each <b>2-year</b> compliance period, including <b>3 hours of ethics</b>. Due by the last day of your <b>birth month</b>. Even birth year = even compliance years; odd = odd. You can't repeat a course in the same period. Keep records 5 years.</li>
<li><b>Life and Health Insurance Guaranty Association</b> (58-62): pays covered claims when a member insurer becomes insolvent, funded by <b>assessments on member insurers</b>. Limit: <b>$300,000 per life</b> for all benefits including cash values (higher for some structured settlements and unallocated contracts). It's <b>illegal to use the association in advertising or sales</b> (58-62-86). Policyholders get a summary document with a disclaimer at delivery.</li>
<li><b>Fraternal benefit society</b> (58-24-1): non-profit, no capital stock, run for members and their beneficiaries, operating on a <b>lodge system</b> with <b>ritualistic</b> work and a <b>representative form of government</b>.</li>
<li><b>Viatical settlement</b> (58-58-205): the owner (the <b>viator</b>) sells or assigns the policy for less than the death benefit. The buyer pays premiums and collects at death.</li>
</ul>`}
 ],
 cheat:[
 "Unfair trade practices: misrepresentation, false advertising, defamation, boycott/coercion/intimidation, false financial statements, unfair discrimination, rebating, unfair claims practices.",
 "Twisting = misrepresentation or incomplete comparison to get someone to replace a policy (58-3-115). Rebating = an inducement not in the policy.",
 "Cease and desist violation: $1,000 to $5,000 per violation.",
 "Gifts: up to $250 per person per year now; from 1/1/2027, $250 per policy term, not tied to buying.",
 "Extra service fees need written consent first. Card convenience fee up to 4%.",
 "Buyer's Guide + Policy Summary before taking the initial premium, unless there's a 10-day+ unconditional refund (then deliver with the policy).",
 "Say you're a life agent and name the insurer before the presentation. Dividends: 'not guaranteed.'",
 "Replacement: signed existing-coverage statement; read and leave the notice; leave sales materials. Insurer notifies existing insurer within 5 business days; 30-day return right.",
 "Privacy: no pretext interviews. Access/correction: 30 business days. Adverse decision reasons: request within 90 business days.",
 "Ethics: identify yourself; give NPN + DOI contact info on request.",
 "CE: 24 hours (3 ethics) per 2 years, by end of birth month; even/odd birth year.",
 "Guaranty association: $300,000 per life; funded by member insurer assessments; can't be used to sell.",
 "Fraternal: lodge system, ritual, representative government, non-profit.",
 "Viatical: owner (viator) sells the policy for less than the death benefit."
 ],
 quiz:[
 {t:"mc", tag:"Scenario", q:"An agent tells a client a competitor 'is about to go bankrupt,' which is false, to win the sale. This is:", o:["Defamation","Rebating","Twisting","Boycott"], why:"False or maliciously critical statements about an insurer's financial condition meant to injure it are defamation under G.S. 58-63-15(3)."},
 {t:"mc", tag:"Scenario", q:"An agent shows a client only the benefits of a new policy and leaves out the surrender charge on the old one, to get the client to switch. This is:", o:["Twisting","Defamation","Churning by the insurer only","A legal comparison"], why:"An incomplete comparison used to induce a replacement is twisting (G.S. 58-3-115)."},
 {t:"mc", tag:"Scenario", q:"An agent offers to give back half of his commission if the client buys today. This is:", o:["Rebating","Twisting","Permitted if disclosed","Coercion"], why:"Returning part of the commission or premium as an inducement is rebating, banned by G.S. 58-33-85 and 58-63-15(8)."},
 {t:"mc", q:"Charging different rates to two people of the same class and life expectancy for the same coverage is:", o:["Unfair discrimination","Underwriting","Rebating","Twisting"], why:"Unfair discrimination means treating people in the same class differently in rates, benefits, or terms."},
 {t:"mc", q:"Willfully violating a final cease and desist order of the Commissioner carries a penalty of:", o:["$1,000 to $5,000 per violation","$100 to $1,000 per violation","$50 per violation","Only a warning"], why:"G.S. 58-63-50 sets $1,000 to $5,000 for each violation."},
 {t:"mc", q:"Under NC's Life Insurance Disclosure Act, the insurer must provide a Buyer's Guide and Policy Summary:", o:["Before accepting the initial premium, unless the policy has an unconditional refund of at least 10 days","Only if the buyer asks","Within 60 days after issue","Only for annuities"], why:"G.S. 58-60-15: before the initial premium, or with the policy if there's a 10-day+ unconditional refund right."},
 {t:"mc", q:"Before starting a life insurance sales presentation, an NC producer must tell the prospect:", o:["That they're a life insurance agent and the full name of the insurer","Their commission amount","Their home address","Their CE hours"], why:"G.S. 58-60-20(b) requires the producer to identify themselves as a life agent and name the insurer."},
 {t:"mc", tag:"Scenario", q:"In a replacement, when must the producer present and read the NC replacement notice to the applicant?", o:["No later than when the application is taken","At policy delivery","Within 30 days after issue","Only if the existing insurer asks"], why:"11 NCAC 12 .0605(b): the notice is read and signed no later than when taking the application, and a copy is left with the applicant."},
 {t:"mc", q:"In NC, how long does a policyowner have to return a replacement policy for a full refund?", o:["30 days","10 days","20 days","60 days"], why:"11 NCAC 12 .0612(a)(4) requires a 30-day right to return a replacement policy or contract."},
 {t:"mc", q:"The replacing insurer must notify the existing insurer within:", o:["5 business days of receiving the completed application","30 days of issue","24 hours","90 days"], why:"11 NCAC 12 .0612(a)(2): 5 business days."},
 {t:"mc", q:"Under NC's privacy law, a pretext interview is one in which the interviewer:", o:["Pretends to be someone else or hides the interview's real purpose","Interviews the applicant in person","Records the interview","Uses a translator"], why:"G.S. 58-39-15 defines pretext interviews; G.S. 58-39-20 bans them except in limited fraud investigations."},
 {t:"mc", q:"An individual asks in writing to see the personal information an insurer has on them. The insurer must respond within:", o:["30 business days","10 days","90 business days","1 year"], why:"G.S. 58-39-45 gives 30 business days. Correction requests also get 30 business days (58-39-50)."},
 {t:"mc", q:"NC producers holding a Life license must complete how much CE each compliance period?", o:["24 hours every 2 years, including 3 hours of ethics","12 hours every year","24 hours every year","10 hours every 2 years"], why:"11 NCAC 06A .0802: 24 credits per biennial period, including a 3-credit ethics course, due by the end of the birth month."},
 {t:"mc", q:"Which statement about the NC Life and Health Insurance Guaranty Association is true?", o:["Producers may not use its existence to sell insurance","It's funded by state taxes","It covers unlimited amounts","It insures against market losses"], why:"G.S. 58-62-86 bans using the association in sales or advertising. It's funded by assessments on member insurers and has limits ($300,000 per life for most benefits)."}
 ]
}
];

/* Extra questions that only appear on the practice exam. sec = outline section. */
const FINAL_EXTRA = [
 {sec:"I", t:"mc", q:"Which policy combines whole life with level term so the death benefit is double until age 65?", o:["Multiple (double) protection","Family income policy","Jumping juvenile","Graded premium whole life"], why:"Double or triple protection adds level term to whole life for a set period. After that, only the base remains."},
 {sec:"I", t:"mc", q:"A term rider that pays the face amount plus all premiums paid if death occurs in the rider period is:", o:["Face amount plus return of premium","Face amount plus cash value","Decreasing term","Waiver of premium"], why:"An increasing term rider equal to premiums paid adds them back on top of the face."},
 {sec:"I", t:"mc", q:"Which is true of universal life's target premium?", o:["It's a suggested amount to keep the policy in force on the insurer's assumptions, not a guarantee","It's the maximum premium allowed","It must be paid every month or the policy lapses","It's set by the state"], why:"Paying the target doesn't guarantee coverage if credited rates fall or charges rise."},
 {sec:"I", t:"mc", q:"Adjustable life allows the owner to change:", o:["The face amount, premium, and coverage period","Only the beneficiary","Only the insured","Nothing after issue"], why:"Adjustable life can shift between term-like and whole-life-like coverage by changing face, premium, or period."},
 {sec:"I", t:"mc", q:"Which policy gives the owner investment choices in a separate account AND flexible premiums?", o:["Variable universal life","Variable life","Interest-sensitive whole life","Level term"], why:"VUL combines UL's flexibility with variable life's separate account investing."},
 {sec:"I", t:"mc", tag:"Scenario", q:"A 30-year-old with a young family and a tight budget needs $750,000 of coverage for 20 years. What's the most affordable fit?", o:["20-year level term","Single premium whole life","20-pay whole life","Endowment at age 50"], why:"Term gives the most coverage per premium dollar for a temporary need."},
 {sec:"II", t:"mc", q:"During the accumulation period, if a deferred annuity owner dies, the beneficiary typically receives:", o:["The greater of premiums paid or the accumulated value","Nothing","Only the premiums, without interest","A lifetime income automatically"], why:"Before the annuity starting date, most contracts guarantee a death benefit of at least the premiums paid or the account value."},
 {sec:"II", t:"mc", q:"Which annuity is purchased with a single premium and begins payments within a year?", o:["Single premium immediate annuity (SPIA)","Flexible premium deferred annuity","Variable deferred annuity","Equity-indexed deferred annuity"], why:"Immediate annuities need one premium and start income within 12 months."},
 {sec:"II", t:"mc", q:"A joint and survivor annuity:", o:["Keeps paying until the second annuitant dies","Stops at the first death","Pays only to a beneficiary","Requires the annuitants to be married"], why:"Payments continue (sometimes reduced) to the survivor until the last death."},
 {sec:"III", t:"mc", q:"Which dividend option buys small amounts of fully paid-up permanent insurance?", o:["Paid-up additions","One-year term","Reduce premium","Accumulate at interest"], why:"Paid-up additions use each dividend as a single premium for more of the same coverage, no evidence of insurability needed."},
 {sec:"III", t:"mc", q:"The aviation exclusion usually excludes death of:", o:["A pilot or crew member on a non-commercial flight","A fare-paying passenger on a commercial airline","Anyone who ever flew","Flight attendants on commercial flights only"], why:"Commercial passengers are covered. The exclusion targets private, military, or non-scheduled flying as pilot or crew."},
 {sec:"III", t:"mc", q:"Which settlement option pays the proceeds over a set number of years?", o:["Fixed period","Fixed amount","Interest only","Lump sum"], why:"Fixed period sets the time; the check size follows from it. Fixed amount sets the check size instead."},
 {sec:"III", t:"mc", q:"A UL rider that pays the cost of insurance and expense charges while the insured is disabled is:", o:["Waiver of monthly deduction","Guaranteed insurability","Payor benefit","Cost of living"], why:"UL has monthly deductions instead of a fixed premium, so the disability waiver covers those deductions."},
 {sec:"III", t:"mc", q:"A back-end load in a life policy is:", o:["A charge when the owner surrenders the policy","A charge taken from each premium","The mortality charge","An extra premium for smokers"], why:"Back-end load = surrender charge. Front-end load = taken out of each premium."},
 {sec:"IV", t:"mc", q:"Under federal tax law, employer-paid group term life is tax-free to the employee up to:", o:["$50,000 of coverage","$10,000 of coverage","$100,000 of coverage","Any amount"], why:"IRC Section 79: the cost of coverage over $50,000 is taxable income to the employee."},
 {sec:"IV", t:"mc", q:"Which 1035 exchange is NOT tax-free?", o:["Annuity to life insurance","Life insurance to annuity","Life insurance to life insurance","Annuity to annuity"], why:"You can go from life to annuity, but not from annuity to life, tax-free."},
 {sec:"IV", t:"mc", q:"A binding receipt provides:", o:["Immediate temporary coverage, even if the applicant is later declined, until the insurer acts","Coverage only if the applicant is insurable as applied for","No coverage until delivery","Permanent coverage"], why:"Binding receipts start coverage right away for a limited time. Conditional receipts depend on insurability."},
 {sec:"IV", t:"mc", q:"A Social Security worker who is 'currently insured' has earned at least:", o:["6 credits in the last 13 quarters","40 credits","20 credits in 10 years","One credit"], why:"Currently insured status (6 of the last 13 quarters) provides limited survivor benefits. Fully insured requires 40 credits."},
 {sec:"V", t:"mc", q:"An NC producer wants to do business as 'Carolina Life Solutions' instead of her legal name. She must:", o:["Notify the Commissioner before using the assumed name","Notify the Commissioner within 30 days after using it","Get each insurer's written permission only","Do nothing; names don't matter"], why:"G.S. 58-33-83: notify the Commissioner before using any name other than your legal name."},
 {sec:"V", t:"mc", q:"Which of these defines a fraternal benefit society under NC law?", o:["A non-profit society operating on a lodge system with a representative form of government","A stock insurer owned by shareholders","Any mutual insurer","A government insurance plan"], why:"G.S. 58-24-1: lodge system, ritualistic form of work, representative government, non-profit, for members and beneficiaries."},
 {sec:"V", t:"mc", q:"In a viatical settlement, the viator is:", o:["The policyowner who sells the policy","The company that buys the policy","The insurer that issued it","The broker"], why:"G.S. 58-58-205: the viator is the owner who sells or assigns the policy for less than its death benefit."},
 {sec:"V", t:"mc", q:"When asked to show proof of licensure, NC ethics rules require a producer to provide:", o:["Their National Producer Number and the Department's website and phone number","Their Social Security number","Their commission statement","Their home address"], why:"11 NCAC 04 .0423(a)(2): provide your NPN and the Department's website and phone number for verification."},
 {sec:"V", t:"mc", q:"If a licensed producer files for bankruptcy, they must notify the Commissioner within:", o:["3 business days","30 days","10 business days","At their next renewal"], why:"G.S. 58-33-46(c) requires notice within three business days of the proceeding."},
 {sec:"V", t:"mc", q:"Under G.S. 58-58-115, life insurance proceeds payable to a named beneficiary (other than the insured's estate) are generally:", o:["Protected from the insured's creditors, except in cases of fraud","Payable first to the insured's creditors","Subject to state income tax","Forfeited if the insured had debts"], why:"NC protects proceeds paid to a lawful beneficiary from the insured's creditors, unless the transfer was meant to defraud them."},
 {sec:"V", t:"mc", q:"If an insurer doesn't pay a death claim within 30 days after receiving satisfactory proof of death, NC law requires it to:", o:["Pay interest on the proceeds from the date of death","Pay double the face amount","Cancel the claim","Pay the agent's commission back"], why:"G.S. 58-58-110: unpaid proceeds after 30 days earn interest, computed from the date of death."},
 {sec:"V", t:"mc", q:"In NC, a minor can buy life insurance on themselves and exercise all ownership rights starting at age:", o:["15","18","16","12"], why:"G.S. 58-58-100 gives minors 15 and older full power to contract for life insurance or annuities."}
];

const GLOSSARY = [
 ["Term life","Temporary coverage for a set period. No cash value.",0],
 ["Level term","Term with a face amount that stays the same for the whole term.",0],
 ["Decreasing term","Term whose face amount shrinks over time while the premium stays level. Used for mortgages.",0],
 ["Annually renewable term (ART)","One-year term that renews each year at a higher premium.",0],
 ["Renewable","Term option to renew without evidence of insurability, at attained-age premiums.",0],
 ["Convertible","Term option to switch to permanent coverage without evidence of insurability.",0],
 ["Attained age","The insured's age now, used to price renewals and attained-age conversions.",0],
 ["Whole life","Permanent coverage with level premium, level face, and guaranteed cash value. Endows at 100 or 121.",0],
 ["Endowment","Policy whose cash value equals the face amount on a set maturity date.",0],
 ["Limited pay","Whole life paid up after a set number of years or a set age.",0],
 ["Modified premium","Lower premium for the first few years, then one jump to a higher level.",0],
 ["Graded premium","Premium rises each year for several years, then levels off.",0],
 ["Indeterminate premium","Insurer can raise the current premium up to a guaranteed maximum.",0],
 ["Joint life","Covers two or more lives; pays at the first death.",1],
 ["Survivorship life","Covers two lives; pays at the second death. Used for estate taxes.",1],
 ["Jumping juvenile","Juvenile policy whose face jumps (usually 5x) at a set age with no evidence of insurability or premium change.",1],
 ["Family policy","Whole life on the main insured plus term on the spouse and children.",1],
 ["Universal life","Flexible-premium, adjustable permanent life with unbundled mortality, expense, and interest.",1],
 ["Target premium","Suggested UL premium to keep the policy in force on current assumptions. Not guaranteed.",1],
 ["Option A / Option B","UL death benefit options: A is level face; B is face plus cash value.",1],
 ["Corridor","Required gap between death benefit and cash value for a policy to qualify as life insurance.",1],
 ["Interest-sensitive whole life","Fixed-premium whole life with cash value credited at current rates. Also called current assumption.",1],
 ["Variable life","Fixed-premium permanent life with cash value in a separate account. Owner bears investment risk.",1],
 ["Separate account","Insurer account holding variable product investments, apart from the general account.",1],
 ["Annuitant","The person whose life annuity payments are based on.",2],
 ["Immediate annuity","Single-premium annuity that starts payments within one year.",2],
 ["Joint and survivor","Annuity that keeps paying until the last of two annuitants dies.",2],
 ["Straight life annuity","Pays for life with nothing left after death. Highest payment.",2],
 ["Period certain","Payout guaranteed for at least a set number of years.",2],
 ["Refund annuity","Pays the beneficiary the unpaid premium balance, in cash or installments.",2],
 ["Entire contract clause","Policy plus attached application is the whole contract.",3],
 ["Grace period","Time after a due date when coverage stays in force. 31 days for NC life.",3],
 ["Incontestable clause","After 2 years in force (NC), insurer can't void for application statements.",3],
 ["Misstatement of age","Benefit adjusted to what the premium would buy at the correct age or gender.",3],
 ["Reinstatement","Restoring a lapsed policy. NC: within 5 years, with evidence of insurability and back premiums.",3],
 ["Absolute assignment","Permanent transfer of all ownership rights.",3],
 ["Collateral assignment","Temporary, partial transfer to secure a loan.",3],
 ["Status vs results war clause","Status excludes any death in military service; results excludes only deaths caused by war.",3],
 ["Irrevocable beneficiary","Beneficiary with a vested interest; changes need their consent.",3],
 ["Contingent beneficiary","Paid only if no primary beneficiary is alive.",3],
 ["Per stirpes","A deceased beneficiary's share passes to their descendants.",3],
 ["Per capita","Proceeds split equally among the living named beneficiaries.",3],
 ["Uniform Simultaneous Death Act","If death order can't be determined, the insured is presumed to survive the beneficiary.",3],
 ["Common disaster clause","Beneficiary must outlive the insured by a set period to collect.",3],
 ["Extended term","Nonforfeiture option: same face as term for as long as the cash value lasts. Usual default.",4],
 ["Reduced paid-up","Nonforfeiture option: smaller face, paid up for life.",4],
 ["Automatic premium loan","Insurer borrows an unpaid premium from cash value to prevent lapse.",4],
 ["Participating policy","Policy that pays dividends, usually from a mutual insurer.",4],
 ["Dividend","Return of excess premium. Not guaranteed, not taxable until it exceeds premiums paid.",4],
 ["Paid-up additions","Dividend option buying small amounts of paid-up insurance.",4],
 ["Fixed period option","Settlement option paying over a set number of years.",4],
 ["Fixed amount option","Settlement option paying a set dollar amount until funds run out.",4],
 ["Waiver of premium","Rider waiving premiums during total disability after a waiting period.",4],
 ["Guaranteed insurability","Rider to buy more coverage at set dates or events without evidence of insurability.",4],
 ["AD&D","Accidental death and dismemberment: principal sum for death, capital sum for dismemberment.",4],
 ["Front-end / back-end load","Expense charge taken from premiums (front) or at surrender (back).",4],
 ["Unilateral contract","Only the insurer makes an enforceable promise.",5],
 ["Adhesion","Take-it-or-leave-it contract; ambiguities favor the insured.",5],
 ["Aleatory","Unequal exchange that depends on chance.",5],
 ["Insurable interest","A real financial or family stake in the insured's life. Required at issue.",5],
 ["Representation","Application statement believed true to the best of one's knowledge.",5],
 ["Material misrepresentation","False statement that would have changed the insurer's decision.",5],
 ["Conditional receipt","Coverage from the application or exam date if the applicant is insurable as applied for.",5],
 ["Statement of continued good health","Signed at delivery when no premium was paid with the application.",5],
 ["MIB","Medical Information Bureau: shared database of medical info reported by insurers.",5],
 ["Attending physician statement (APS)","Report from the applicant's doctor used in underwriting.",5],
 ["Counteroffer","Policy issued other than as applied for; the applicant must accept it.",5],
 ["Master policy / certificate","Group contract held by the sponsor; certificates go to members.",6],
 ["Group conversion","Right to convert group life to individual coverage within 31 days, no evidence of insurability.",6],
 ["Credit life","Coverage on a borrower, payable to the creditor, not more than the debt.",6],
 ["403(b) / TSA","Retirement plan for public schools and 501(c)(3) nonprofits.",6],
 ["Keogh (HR-10)","Retirement plan for the self-employed.",6],
 ["SEP","Employer contributes to each employee's own IRA.",6],
 ["Cross-purchase plan","Buy-sell where each owner insures the others.",6],
 ["Entity plan","Buy-sell where the business owns a policy on each owner.",6],
 ["Key person insurance","Business insures a vital employee; business is owner and beneficiary.",6],
 ["Fully insured","Social Security status with 40 credits.",6],
 ["Blackout period","No Social Security survivor benefit from when the youngest child turns 16 until the spouse turns 60.",6],
 ["MEC","Modified endowment contract: fails the 7-pay test, so loans and withdrawals are taxed gain-first.",6],
 ["1035 exchange","Tax-free swap: life to life, life to annuity, annuity to annuity.",6],
 ["Interest-adjusted net cost","Cost comparison that accounts for the time value of money.",6],
 ["Domestic / foreign / alien","Insurer organized in NC / another U.S. state / outside the U.S.",7],
 ["Commissioner of Insurance","Elected NC official, 4-year term, who enforces the insurance laws.",7],
 ["Appointment","Insurer's authorization for a producer to represent it. Filed within 15 days of the first application.",7],
 ["Temporary license","Up to 180 days, no exam, e.g., for the family of a deceased producer.",7],
 ["NPN","National Producer Number.",7],
 ["Embezzlement","Producer misusing money received in the business. Felony in NC.",7],
 ["Twisting","Misrepresentation or incomplete comparison to induce a replacement.",8],
 ["Rebating","Any inducement not specified in the policy, like returning part of the premium.",8],
 ["Defamation","False or malicious statements about an insurer's finances meant to injure it.",8],
 ["Unfair discrimination","Treating people of the same class differently in rates or benefits.",8],
 ["Buyer's Guide","Consumer guide to life insurance, delivered with the Policy Summary.",8],
 ["Policy Summary","Document describing a specific policy's premiums, benefits, and values.",8],
 ["Replacement","New policy bought when an existing one is lapsed, surrendered, reduced, or used to finance it.",8],
 ["Pretext interview","Getting info by pretending to be someone else or hiding the purpose. Banned in NC.",8],
 ["Adverse underwriting decision","Declining, rating, or otherwise limiting coverage based on underwriting.",8],
 ["Guaranty association","Pays covered claims if a member insurer fails. $300,000 per life in NC.",8],
 ["Fraternal benefit society","Non-profit lodge-system society with ritual and representative government.",8],
 ["Viatical settlement","Owner (viator) sells a policy for less than its death benefit.",8],
 ["CE","Continuing education: 24 hours (3 ethics) every 2 years in NC.",8]
];

const SOURCES = [
 ["Pearson VUE: North Carolina insurance licensing (exam program page)","https://www.pearsonvue.com/us/en/nc/insurance.html"],
 ["Pearson VUE: NC Insurance Content Outlines, effective March 2, 2026 (#123415)","https://www.pearsonvue.com/content/dam/VUE/vue/en/documents/publications/123415.pdf"],
 ["Pearson VUE: NC Insurance Licensing Candidate Handbook (#123400)","https://www.pearsonvue.com/content/dam/VUE/vue/en/documents/publications/123400.pdf"],
 ["G.S. Chapter 58, Article 1 (definitions; contract of insurance)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_1.html"],
 ["G.S. Chapter 58, Article 2 (Commissioner of Insurance)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_2.html"],
 ["G.S. Chapter 58, Article 3 (general regulations: twisting, discrimination, fees)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_3.html"],
 ["G.S. Chapter 58, Article 24 (fraternal benefit societies)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_24.html"],
 ["G.S. Chapter 58, Article 33 (licensing of producers)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_33.html"],
 ["G.S. Chapter 58, Article 39 (Insurance Information and Privacy Protection Act)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_39.html"],
 ["G.S. Chapter 58, Article 58 (life insurance: standard provisions, group life, viaticals)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_58.html"],
 ["G.S. Chapter 58, Article 60 (Life Insurance Disclosure Act)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_60.html"],
 ["G.S. Chapter 58, Article 62 (Life and Health Insurance Guaranty Association)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_62.html"],
 ["G.S. Chapter 58, Article 63 (unfair trade practices)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/ByArticle/Chapter_58/Article_63.html"],
 ["G.S. 14-100 (obtaining property by false pretenses)","https://www.ncleg.gov/EnactedLegislation/Statutes/HTML/BySection/Chapter_14/GS_14-100.html"],
 ["11 NCAC 12 .0602 (definition of replacement)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-12-0602"],
 ["11 NCAC 12 .0605 (producer duties in replacements)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-12-0605"],
 ["11 NCAC 12 .0612 (replacing insurer duties; 30-day return)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-12-0612"],
 ["11 NCAC 04 .0423 (ethical standards)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-04-0423"],
 ["11 NCAC 06A .0802 (CE licensee requirements)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-06A-0802"],
 ["11 NCAC 19 .0103 (complaint records)","https://www.law.cornell.edu/regulations/north-carolina/11-N-C-Admin-Code-19-0103"],
 ["SSA: Who can get survivor benefits","https://www.ssa.gov/survivor/eligibility"],
 ["IRS Publication 525 (taxable and nontaxable income: life insurance, group term over $50,000)","https://www.irs.gov/publications/p525"],
 ["26 U.S.C. 7702 and 7702A (definition of life insurance; MEC 7-pay test)","https://www.law.cornell.edu/uscode/text/26/7702A"],
 ["26 U.S.C. 1035 (tax-free exchanges)","https://www.law.cornell.edu/uscode/text/26/1035"],
 ["NC Department of Insurance: Licensees","https://www.ncdoi.gov/licensees"]
];

/* Official outline: NC Life Agent, Pearson VUE content outline effective March 2, 2026. 55 scored items. */
const OUTLINE = [
 {sec:"I", name:"Types of individual life insurance", n:17, covers:"Term (renewable, convertible), whole life, endowment, premium variations, combination policies, joint and survivorship, juvenile, universal life, interest-sensitive whole life", levels:[0,1]},
 {sec:"II", name:"Annuities", n:5, covers:"Annuity principle, premium methods, fixed / variable / equity index, immediate vs deferred, single / joint / joint and survivor, payout guarantees", levels:[2]},
 {sec:"III", name:"Policy provisions, options, and other features", n:11, covers:"General provisions, exclusions, nonforfeiture, loans, dividends, settlement options, beneficiaries, premium payment and charges, riders", levels:[3,4]},
 {sec:"IV", name:"Other life topics", n:8, covers:"Group life, retirement plans, business uses, Social Security, federal taxation, legal concepts, cost comparison, contract formation and delivery, variable products and FINRA", levels:[5,6]},
 {sec:"V", name:"NC statutes and regulations pertinent to life", n:14, covers:"G.S. 58 Articles 1, 2, 3, 24, 33, 39, 58, 60, 62, 63; G.S. 14-100; 11 NCAC rules on replacement, ethics, CE, and complaint records; viaticals", levels:[7,8]}
];
